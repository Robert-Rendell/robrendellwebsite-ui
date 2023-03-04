import React from "react";
import { BattleshipsGame } from "robrendellwebsite-common";

type Props = {
  game?: BattleshipsGame;
};
export function BattleshipsGameComponent(props: Props) {
  return (
    <>
      {!props.game && <h2>No game loaded.</h2>}
      {props.game && (
        <>
          <h2>Game ID: [{props.game.gameId}]</h2>
          <p>{JSON.stringify(props.game)}</p>
        </>
      )}
    </>
  );
}
