import React from "react";
import { BattleshipsGame } from "robrendellwebsite-common";
import "./ships.component.css";

type Props = {
  game: BattleshipsGame;
  perspective?: string;
};
export function BattleshipsComponent(props: Props) {
  const perspectiveIndex = props.game?.playerUsernames.findIndex(
    (username) => username !== props.perspective
  );
  return props.perspective ? (
    <>
      <div id="ship-status">
        {Object.entries(props.game.playerShips[perspectiveIndex]).map(
          ([ship, status], i) => {
            return (
              <>
                <span
                  className={status === "sunk" ? "ship-sunk" : "ship-unsunk"}
                  key={`${ship}-${i}`}
                >
                  <>{ship}</>
                </span>
                &nbsp;
              </>
            );
          }
        )}
      </div>
    </>
  ) : (
    <></>
  );
}
