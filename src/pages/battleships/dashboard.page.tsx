import React, { useRef, useState } from "react";
import { BattleshipsUser } from "robrendellwebsite-common";
import { Button } from "react-bootstrap";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { PageComponent } from "../../components/page.component";
import { BattleshipsUserComponent } from "./components/user.component";
import { useGetBattleshipsGame } from "./hooks/useGetBattleshipsGame.hook";
import { BattleshipsGameComponent } from "./components/game.component";
import { usePostBattleshipsCreateGame } from "./hooks/usePostBattleshipsCreateGame.hooks";

export function BattleshipsDashboardComponent() {
  const userState = useState<BattleshipsUser>();
  const [user] = userState;
  const [loadedGame] = useGetBattleshipsGame({
    gameId: "",
  });
  const [isCreatingGame, setIsCreatingGame] = useState(false);
  const [newGame] = usePostBattleshipsCreateGame({
    username: user?.username || "",
    gameId: "",
    boardDimensions: [10, 10],
    isCreatingGame,
    reset: () => setIsCreatingGame(false),
  });
  return (
    <>
      <PageComponent
        title={SharedText.Battleships.Dashboard}
        route={SharedRoutes.Battleships.Dashboard}
      >
        <BattleshipsUserComponent userState={userState} />
        <Button onClick={() => !isCreatingGame && setIsCreatingGame(true)}>
          Create Game
        </Button>
        <Button disabled>Join Game</Button>
        <hr />
        {newGame && (
          <p>
            New game created by {user?.username}: {newGame.gameId}
          </p>
        )}
        <BattleshipsGameComponent game={newGame || loadedGame} />
      </PageComponent>
    </>
  );
}
