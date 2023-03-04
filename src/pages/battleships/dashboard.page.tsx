import React, { useState } from "react";
import { BattleshipsUser } from "robrendellwebsite-common";
import { Button } from "react-bootstrap";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { PageComponent } from "../../components/page.component";
import { BattleshipsUserComponent } from "./components/user.component";
import { useGetBattleshipsGame } from "./hooks/useGetBattleshipsGame.hook";
import { BattleshipsGameComponent } from "./components/game.component";

export function BattleshipsDashboardComponent() {
  const [user, setUser] = useState<BattleshipsUser>();
  const [game] = useGetBattleshipsGame({
    gameId: "d052a9a0-a4de-4388-9d50-7d9499573e55",
  });
  return (
    <>
      <PageComponent
        title={SharedText.Battleships.Dashboard}
        route={SharedRoutes.Battleships.Dashboard}
      >
        <BattleshipsUserComponent user={user} />
        <Button disabled>Create Game</Button>
        <Button disabled>Join Game</Button>
        <hr />
        <BattleshipsGameComponent game={game} />
      </PageComponent>
    </>
  );
}
