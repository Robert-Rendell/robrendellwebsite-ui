import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "react-bootstrap";
import {
  BattleshipsGame,
  BattleshipsMove,
  BattleshipsUser,
  BattleshipsUsername,
} from "robrendellwebsite-common";
import { usePostBattleshipsMakeMove } from "../hooks/useMakeMove.hook";
import { usePostBattleshipsStartConfiguration } from "../hooks/usePostStartConfiguration.hook";
import "./game.component.css";

/**
 * No.	Class of ship	 Size
 * 1	  Carrier	       5
 * 2	  Battleship	   4
 * 3	  Cruiser	       3
 * 4	  Submarine	     3
 * 5	  Destroyer	     2
 */
export const Battleship = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarine: 3,
  Destroyer: 2,
  "": -1,
};

export type BattleshipType = keyof typeof Battleship;

type Props = {
  game?: BattleshipsGame;
  user?: BattleshipsUser;
  setIsRefreshingGame: React.Dispatch<React.SetStateAction<boolean>>;
};
export function BattleshipsGameComponent(
  props: React.PropsWithChildren<Props>
) {
  const [perspective, setPerspective] = useState<
    BattleshipsUsername | undefined
  >(props.user?.username);
  const refreshInterval = useRef<NodeJS.Timer>();
  const isFinishedConfiguration = useRef(false);
  const currentMove = useRef<BattleshipsMove>();
  const [startBoard, setStartBoard] = useState<BattleshipType[][]>();
  const [isSubmittingMove, setIsSubmittingMove] = useState(false);
  const [isSubmittingStartConfiguration, setIsSubmittingStartConfiguration] =
    useState(false);
  const [selectedShip, setSelectedShip] = useState<BattleshipType>("Carrier");
  const [rows, cols] = props.game?.boardDimensions || [0, 0];
  const state = props.game?.state;

  const showConfigurationTools =
    props.game?.state === "configuring" && !isFinishedConfiguration.current;

  const currentUserTurn = useMemo(
    () => props.game && props.game?.playerUsernames[props.game.turn ? 0 : 1],
    [props.game]
  );

  const isMyTurn = useCallback(
    () => currentUserTurn === props.user?.username,
    [currentUserTurn, props.user?.username]
  );

  useEffect(() => {
    if (props.user?.username) {
      setPerspective(props.user?.username);
    }
  }, [props.user]);

  const isPlayingAndNotMyTurn = useCallback(() => {
    return props.game?.state === "playing" && !isMyTurn();
  }, [isMyTurn, props.game?.state]);

  useEffect(() => {
    clearInterval(refreshInterval.current);
    refreshInterval.current = setInterval(() => {
      if (!showConfigurationTools || isPlayingAndNotMyTurn()) {
        props.setIsRefreshingGame(true);
      }
    }, 5000);
  }, [isMyTurn, isPlayingAndNotMyTurn, props, showConfigurationTools]);

  const onCellClick = useCallback(
    (x: number, y: number) => {
      if (state === "configuring") {
        const newStartBoard = JSON.parse(JSON.stringify(startBoard));
        newStartBoard[x][y] = selectedShip;
        setStartBoard(newStartBoard);
      }
      if (state === "playing" && !isSubmittingMove) {
        currentMove.current = {
          coords: [x, y],
          datetime: new Date().toUTCString(),
        };
        setIsSubmittingMove(true);
      }
    },
    [isSubmittingMove, state, startBoard, selectedShip]
  );
  const submitStartConfiguration = useCallback(() => {
    setIsSubmittingStartConfiguration(true);
  }, []);
  usePostBattleshipsStartConfiguration({
    proposedStartConfiguration: {
      configuration: startBoard as any,
      gameId: props.game?.gameId || "",
      username: props.user?.username || "",
    },
    isSubmittingStartConfiguration,
    reset: (success?: boolean) => {
      if (success) {
        isFinishedConfiguration.current = true;
      }
      setIsSubmittingStartConfiguration(false);
    },
  });
  usePostBattleshipsMakeMove({
    gameId: props.game?.gameId || "",
    username: props.user?.username || "",
    move: currentMove.current as any,
    isSubmittingMove,
    reset: (newGameState?: BattleshipsGame) => {
      if (newGameState) {
        // TODO: instead of trigger another refresh, just set the game state
        props.setIsRefreshingGame(true);
      }
      setIsSubmittingMove(false);
    },
  });
  useEffect(() => {
    if (props.game) {
      setStartBoard(
        Array.from(Array(rows)).map(() => Array.from(Array(cols).map(() => "")))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.game]);

  const calculateCellClassName = useCallback(
    (x: number, y: number) => {
      const perspectiveIndex = props.game?.playerUsernames.findIndex(
        (username) => username === perspective
      );
      if (props.game?.state === "configuring") {
        if (startBoard && startBoard[x][y]) {
          return "battleships-td-occupied";
        } else {
          return "battleships-td";
        }
      }
      if (props.game?.state === "playing") {
        if (typeof perspectiveIndex !== "undefined" && perspectiveIndex >= 0) {
          if (
            props.game?.playerMoves[perspectiveIndex].find(
              (item) => item.coords[0] === x && item.coords[1] === y
            )
          ) {
            return "battleships-td-p0-move";
          }

          if (props.game?.playerBoards[perspectiveIndex][x][y] === 1) {
            return "battleships-td-p1-move";
          }
        }
      }
    },
    [
      perspective,
      props.game?.playerBoards,
      props.game?.playerMoves,
      props.game?.playerUsernames,
      props.game?.state,
      startBoard,
    ]
  );

  return (
    <>
      {!props.game && <h2>No game loaded.</h2>}
      {props.game && (
        <>
          <p>
            <>
              {state === "created" && <p>Waiting for opponent to join...</p>}
              {state === "configuring" && isFinishedConfiguration.current && (
                <p>Waiting for opponent to place their ships...</p>
              )}
              {state === "playing" && isMyTurn() && (
                <>
                  <p>It&apos;s your turn!</p>
                </>
              )}
              {state === "playing" && !isMyTurn() && (
                <>
                  <p>
                    It&apos;s {currentUserTurn}
                    &apos;s turn...
                  </p>
                </>
              )}
              {props.children}
            </>
          </p>
          <hr />
          <>
            {(state === "configuring" || state === "playing") && (
              <>
                {showConfigurationTools && (
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          {(Object.keys(Battleship) as BattleshipType[]).map(
                            (ship, i) => {
                              return (
                                <>
                                  <td
                                    key={`${ship}${i}`}
                                    className={
                                      selectedShip === ship
                                        ? "battleship-selected"
                                        : "battleship-selector"
                                    }
                                    onClick={() => setSelectedShip(ship)}
                                  >
                                    {ship}
                                  </td>
                                </>
                              );
                            }
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {perspective && (
                  <Button
                    onClick={() =>
                      setPerspective(
                        props.game?.playerUsernames.filter(
                          (un) => un !== perspective
                        )[0]
                      )
                    }
                  >
                    <>Toggle perspective (Current: {perspective})</>
                  </Button>
                )}
                <table className="battleships-table">
                  <tbody>
                    {Array.from(Array(rows)).map((x, i) => {
                      return (
                        <tr key={`${x}-${i}`}>
                          {Array.from(Array(cols)).map((y, j) => {
                            return (
                              <td
                                className={calculateCellClassName(i, j)}
                                key={`${y}-${j}`}
                                onClick={() => onCellClick(i, j)}
                              >
                                {startBoard && startBoard[i][j] && (
                                  <>
                                    <span className="battleships-td-occupied-span">
                                      {Battleship[startBoard[i][j]]}
                                    </span>
                                  </>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {showConfigurationTools && (
                  <Button
                    onClick={submitStartConfiguration}
                    disabled={isSubmittingStartConfiguration}
                  >
                    Submit start configuration
                  </Button>
                )}
                {/* <p>{JSON.stringify(props.game)}</p> */}
              </>
            )}
          </>
        </>
      )}
    </>
  );
}
