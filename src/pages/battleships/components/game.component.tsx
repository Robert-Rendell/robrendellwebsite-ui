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
};
export function BattleshipsGameComponent(
  props: React.PropsWithChildren<Props>
) {
  const isFinishedConfiguration = useRef(false);
  const currentMove = useRef<BattleshipsMove>();
  const [startBoard, setStartBoard] = useState<BattleshipType[][]>();
  const [isSubmittingMove, setIsSubmittingMove] = useState(false);
  const [isSubmittingStartConfiguration, setIsSubmittingStartConfiguration] =
    useState(false);
  const [selectedShip, setSelectedShip] =
    useState<keyof typeof Battleship>("Carrier");
  const [rows, cols] = props.game?.boardDimensions || [0, 0];
  const state = props.game?.state;
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
        // TODO
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
  const currentUserTurn = useMemo(
    () => props.game && props.game?.playerUsernames[props.game.turn ? 0 : 1],
    [props.game]
  );
  const isMyTurn = useCallback(
    () => currentUserTurn === props.user?.username,
    [currentUserTurn, props.user?.username]
  );
  const showConfigurationTools =
    props.game?.state === "configuring" && !isFinishedConfiguration;
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
                {state === "configuring" && (
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
                <table className="battleships-table">
                  <tbody>
                    {Array.from(Array(rows)).map((x, i) => {
                      return (
                        <tr key={`${x}-${i}`}>
                          {Array.from(Array(cols)).map((y, j) => {
                            return (
                              <td
                                className={
                                  startBoard && startBoard[i][j]
                                    ? "battleships-td-occupied"
                                    : "battleships-td"
                                }
                                key={`${y}-${j}`}
                                onClick={() => onCellClick(i, j)}
                              >
                                {startBoard && startBoard[i][j] && (
                                  <>
                                    <span className="battleships-td-occupied-span">
                                      {Battleship[startBoard[i][j]]}
                                    </span>
                                    <span>X</span>
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
                <hr />
                <p>{JSON.stringify(props.game)}</p>
              </>
            )}
          </>
        </>
      )}
    </>
  );
}
