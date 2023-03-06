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
  BattleshipsGameState,
  BattleshipsMove,
  BattleshipsUser,
  BattleshipsUsername,
} from "robrendellwebsite-common";
import { Battleship, BattleshipType } from "../battleship-type";
import { usePostBattleshipsMakeMove } from "../hooks/api/useMakeMove.hook";
import { usePostBattleshipsStartConfiguration } from "../hooks/api/usePostStartConfiguration.hook";
import { BattleshipsConfigurationToolsComponent } from "./configuration-tools.component";
import { BattleshipsGameStatusComponent } from "./game-status.component";
import "./game.component.css";

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
  const selectedShipState = useState<BattleshipType>("Carrier");
  const [selectedShip] = selectedShipState;
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
        if (!startBoard) {
          setStartBoard(
            Array.from(Array(rows)).map(() =>
              Array.from(Array(cols).map(() => ""))
            )
          );
        }
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
    [state, isSubmittingMove, startBoard, selectedShip, rows, cols]
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
    if (props.game && !startBoard) {
      setStartBoard(
        Array.from(Array(rows)).map(() => Array.from(Array(cols).map(() => "")))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isState = useCallback(
    (state: BattleshipsGameState): boolean => {
      return props.game?.state === state;
    },
    [props.game?.state]
  );

  const calculateCellClassName = useCallback(
    (x: number, y: number) => {
      const perspectiveIndex = props.game?.playerUsernames.findIndex(
        (username) => username === perspective
      );
      if (isState("configuring") || isState("playing")) {
        if (isState("configuring" || perspective === props.user?.username)) {
          if (startBoard && startBoard[x][y]) {
            return "battleships-td-occupied";
          } else {
            if (isState("configuring")) {
              return "battleships-td";
            }
          }
        }

        if (isState("playing")) {
          if (
            typeof perspectiveIndex !== "undefined" &&
            perspectiveIndex >= 0
          ) {
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
      }
    },
    [
      isState,
      perspective,
      props.game?.playerBoards,
      props.game?.playerMoves,
      props.game?.playerUsernames,
      props.user?.username,
      startBoard,
    ]
  );

  return (
    <>
      {!props.game && <h2>No game loaded.</h2>}
      {props.game && (
        <>
          <BattleshipsGameStatusComponent
            state={props.game.state}
            isFinishedConfiguration={isFinishedConfiguration}
            isMyTurn={isMyTurn}
            currentUserTurn={currentUserTurn}
          >
            {props.children}
          </BattleshipsGameStatusComponent>
          <hr />
          <>
            {(state === "configuring" || state === "playing") && (
              <>
                {showConfigurationTools && (
                  <BattleshipsConfigurationToolsComponent
                    selectedShipState={selectedShipState}
                  />
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
              </>
            )}
          </>
        </>
      )}
    </>
  );
}
