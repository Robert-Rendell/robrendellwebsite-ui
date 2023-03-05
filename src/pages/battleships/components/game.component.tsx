import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import {
  BattleshipsGame,
  BattleshipsStartConfiguration,
} from "robrendellwebsite-common";
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
};
export function BattleshipsGameComponent(
  props: React.PropsWithChildren<Props>
) {
  const [startBoard, setStartBoard] = useState<BattleshipType[][]>();
  const [isSubmittingStartConfiguration, setIsSubmittingStartConfiguration] =
    useState(false);
  const proposedConfiguration = useRef<BattleshipsStartConfiguration>();
  const [selectedShip, setSelectedShip] =
    useState<keyof typeof Battleship>("Carrier");
  const [rows, cols] = props.game?.boardDimensions || [0, 0];
  const state = props.game?.state;
  const onCellClick = useCallback(
    (x: number, y: number) => {
      const newStartBoard = JSON.parse(JSON.stringify(startBoard));
      newStartBoard[x][y] = selectedShip;
      setStartBoard(newStartBoard);
    },
    [startBoard, selectedShip]
  );
  const submitStartConfiguration = useCallback(() => {
    setIsSubmittingStartConfiguration(true);
  }, []);
  usePostBattleshipsStartConfiguration({
    proposedStartConfiguration: proposedConfiguration.current,
    isSubmittingStartConfiguration,
    reset: () => {
      setIsSubmittingStartConfiguration(false);
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
  return (
    <>
      {!props.game && <h2>No game loaded.</h2>}
      {props.game && (
        <>
          <>
            <h2>Game ID: [{props.game.gameId}]</h2>
            <p>{JSON.stringify(props.game)}</p>
          </>
          <hr />
          <p>
            {state === "created" && (
              <>
                <p>Waiting for opponent to join...</p>
                {props.children}
              </>
            )}
          </p>
          <>
            {(state === "configuring" || state === "playing") && (
              <>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        {(Object.keys(Battleship) as BattleshipType[]).map(
                          (ship) => {
                            return (
                              <>
                                <td
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
                                  <span className="battleships-td-occupied-span">
                                    {Battleship[startBoard[i][j]]}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <Button
                  onClick={submitStartConfiguration}
                  disabled={props.game.state !== "configuring"}
                >
                  Submit start configuration
                </Button>
              </>
            )}
          </>
        </>
      )}
    </>
  );
}
