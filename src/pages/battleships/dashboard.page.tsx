import React, { useCallback, useRef, useState } from "react";
import {
  BattleshipsGame,
  BattleshipsGameId,
  BattleshipsUser,
} from "robrendellwebsite-common";
import { Button } from "react-bootstrap";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { PageComponent } from "../../components/page.component";
import { BattleshipsUserComponent } from "./components/user.component";
import { useGetBattleshipsGame } from "./hooks/useGetBattleshipsGame.hook";
import { BattleshipsGameComponent } from "./components/game.component";
import { usePostBattleshipsCreateGame } from "./hooks/usePostBattleshipsCreateGame.hooks";
import { usePostBattleshipsJoinGame } from "./hooks/usePostBattleshipsJoinGame.hook";
import { usePreferences } from "../../hooks/use-preferences.hook";

export function BattleshipsDashboardComponent() {
  const { preferences, savePreferences } = usePreferences();
  const currentGame = useRef<BattleshipsGame | undefined>();
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
    reset: (game?: BattleshipsGame) => {
      currentGame.current = game;
      setIsCreatingGame(false);
    },
  });
  const [joinedGame] = usePostBattleshipsJoinGame({
    username: user?.username || "",
    gameId: joinGameId.current,
    isJoiningGame,
    reset: (game?: BattleshipsGame) => {
      currentGame.current = game;
      setIsJoiningGame(false);
    },
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
  const startConfiguration = useCallback(() => {
    //
  }, []);
  return (
    <>
      <PageComponent
        title={SharedText.Battleships.Dashboard}
        route={SharedRoutes.Battleships.Dashboard}
      >
        <BattleshipsUserComponent userState={userState} />
        <Button
          onClick={() => !isCreatingGame && setIsCreatingGame(true)}
          disabled={!user}
        >
          Create Game
        </Button>
        <Button onClick={joinGame} disabled={!user}>
          Join Game
        </Button>
        {joinedGame && (
          <>
            {" "}
            <hr />{" "}
            <p>
              Joined {joinedGame.playerUsernames[0]}&apos;s game:{" "}
              {joinedGame.gameId}
              <Button
                onClick={startConfiguration}
                disabled={currentGame.current?.state === "configuring"}
              >
                Submit start configuration
              </Button>
              <Button onClick={makeMove} disabled>
                Make random move
              </Button>
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
