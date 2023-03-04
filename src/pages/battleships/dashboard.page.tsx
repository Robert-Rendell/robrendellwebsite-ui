import React, { useCallback, useRef, useState } from "react";
import { BattleshipsGameId, BattleshipsUser } from "robrendellwebsite-common";
import { Button } from "react-bootstrap";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { PageComponent } from "../../components/page.component";
import { BattleshipsUserComponent } from "./components/user.component";
import { useGetBattleshipsGame } from "./hooks/useGetBattleshipsGame.hook";
import { BattleshipsGameComponent } from "./components/game.component";
import { usePostBattleshipsCreateGame } from "./hooks/usePostBattleshipsCreateGame.hooks";
import { usePostBattleshipsJoinGame } from "./hooks/usePostBattleshipsJoinGame.hook";

export function BattleshipsDashboardComponent() {
  const joinGameId = useRef<BattleshipsGameId>("");
  const userState = useState<BattleshipsUser>();
  const [user] = userState;
  const [loadedGame] = useGetBattleshipsGame({
    gameId: "",
  });
  const [isCreatingGame, setIsCreatingGame] = useState(false);
  const [isJoiningGame, setIsJoiningGame] = useState(false);
  const [newGame] = usePostBattleshipsCreateGame({
    username: user?.username || "",
    gameId: "",
    boardDimensions: [10, 10],
    isCreatingGame,
    reset: () => setIsCreatingGame(false),
  });
  const [joinedGame] = usePostBattleshipsJoinGame({
    username: user?.username || "",
    gameId: joinGameId.current,
    isJoiningGame,
    reset: () => setIsJoiningGame(false),
  });
  const joinGame = useCallback(() => {
    if (!isJoiningGame) {
      joinGameId.current = prompt("Enter the game id you wish to join") || "";
      setIsJoiningGame(true);
    }
  }, [isJoiningGame]);
  const makeMove = useCallback(() => {
    //
  }, []);
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
        <Button onClick={joinGame}>Join Game</Button>
        {joinedGame && (
          <>
            {" "}
            <hr />{" "}
            <p>
              Joined {joinedGame.playerUsernames[0]}&apos;s game:{" "}
              {joinedGame.gameId}
              <Button onClick={makeMove}>Make random move</Button>
            </p>
            <hr />
          </>
        )}
        {newGame && (
          <p>
            New game created by {user?.username}: {newGame.gameId}
          </p>
        )}
        <BattleshipsGameComponent game={newGame || joinedGame || loadedGame} />
      </PageComponent>
    </>
  );
}
