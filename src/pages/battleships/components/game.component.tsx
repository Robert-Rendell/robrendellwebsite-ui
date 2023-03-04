import React from "react";
import { BattleshipsGame } from "robrendellwebsite-common";
import "./game.component.css";

type Props = {
  game?: BattleshipsGame;
};
export function BattleshipsGameComponent(props: Props) {
  const [rows, cols] = props.game?.boardDimensions || [0, 0];
  const state = props.game?.state;
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
          <p>{state === "created" && <p>Waiting for opponent to join...</p>}</p>
          <>
            {(state === "configuring" || state === "playing") && (
              <table className="battleships-table">
                <tbody>
                  {Array.from(Array(rows)).map((x, i) => {
                    console.log(x, i);
                    return (
                      <tr key={`${x}-${i}`}>
                        {Array.from(Array(cols)).map((y, j) => {
                          console.log(y, i);
                          return (
                            <td
                              className="battleships-td"
                              key={`${y}-${j}`}
                            ></td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </>
        </>
      )}
    </>
  );
}
