import React from "react";
import { Button } from "react-bootstrap";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { PageComponent } from "../../components/page.component";

export function BattleshipsDashboardComponent() {
  return (
    <>
      <PageComponent
        title={SharedText.Battleships.Dashboard}
        route={SharedRoutes.Battleships.Dashboard}
      >
        <Button>Login</Button>
        <Button>Create Game</Button>
        <Button>Join Game</Button>
      </PageComponent>
    </>
  );
}
