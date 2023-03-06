import React, { MutableRefObject } from "react";
import { BattleshipsGameState } from "robrendellwebsite-common";

type Props = {
  state: BattleshipsGameState;
  isFinishedConfiguration: MutableRefObject<boolean>;
  isMyTurn: () => boolean;
  currentUserTurn: string | undefined;
};
export function BattleshipsGameStatusComponent(
  props: React.PropsWithChildren<Props>
) {
  const { state, isFinishedConfiguration, isMyTurn, currentUserTurn } = props;
  return (
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
    </>
  );
}
