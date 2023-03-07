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
          {state === "created" && "Waiting for opponent to join..."}
          {state === "configuring" &&
            isFinishedConfiguration.current &&
            "Waiting for opponent to place their ships..."}
          {state === "playing" && isMyTurn() && <>It&apos;s your turn!</>}
          {state === "playing" && !isMyTurn() && (
            <>
              It&apos;s {currentUserTurn}
              &apos;s turn...
            </>
          )}
          {props.children}
        </>
      </p>
    </>
  );
}
