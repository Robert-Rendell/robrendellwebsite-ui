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
import { useGetBattleshipsGame } from "./hooks/useGetGame.hook";
import { BattleshipsGameComponent } from "./components/game.component";
import { usePostBattleshipsCreateGame } from "./hooks/usePostCreateGame.hooks";
import { usePostBattleshipsJoinGame } from "./hooks/usePostJoinGame.hook";
import { InfinitySpinnerComponent } from "../../components/infinity-spinner.component";

export function BattleshipsDashboardComponent() {
  const [isCreatingGame, setIsCreatingGame] = useState(false);
  const [isJoiningGame, setIsJoiningGame] = useState(false);
  const isRefreshingGameRef = useState(false);
  const [isRefreshingGame, setIsRefreshingGame] = isRefreshingGameRef;

  const currentGame = useRef<BattleshipsGame | undefined>();
  const joinGameId = useRef<BattleshipsGameId>("");
  const userState = useState<BattleshipsUser>();
  const [user] = userState;

  useGetBattleshipsGame({
    gameId: currentGame.current?.gameId,
    isRefreshingGame,
    reset: (game?: BattleshipsGame) => {
      if (game) currentGame.current = game;
      setIsRefreshingGame(false);
    },
  });
  const [newGame] = usePostBattleshipsCreateGame({
    username: user?.username || "",
    gameId: "",
    boardDimensions: [10, 10],
    isCreatingGame,
    reset: (game?: BattleshipsGame) => {
      if (game) currentGame.current = game;
      setIsCreatingGame(false);
    },
  });
  const [joinedGame] = usePostBattleshipsJoinGame({
    username: user?.username || "",
    gameId: joinGameId.current,
    isJoiningGame,
    reset: (game?: BattleshipsGame) => {
      if (game) currentGame.current = game;
      setIsJoiningGame(false);
    },
  });
  const joinGame = useCallback(() => {
    if (!isJoiningGame) {
      joinGameId.current = prompt("Enter the game id you wish to join") || "";
      setIsJoiningGame(true);
    }
  }, [isJoiningGame]);
  const refreshGame = useCallback(() => {
    setIsRefreshingGame(true);
  }, [setIsRefreshingGame]);
  return (
    <>
      <PageComponent
        title={SharedText.Battleships.Dashboard}
        route={SharedRoutes.Battleships.Dashboard}
      >
        <BattleshipsUserComponent userState={userState} />
        <Button
          onClick={() => !isCreatingGame && setIsCreatingGame(true)}
          disabled={!user || isJoiningGame}
        >
          Create Game
        </Button>
        <Button onClick={joinGame} disabled={!user || isJoiningGame}>
          Join Game
        </Button>
        {currentGame.current?.gameId === joinedGame?.gameId && joinedGame && (
          <>
            <hr />
            <p>
              Joined {joinedGame.playerUsernames[0]}&apos;s game:{" "}
              {joinedGame.gameId}
            </p>
            <hr />
          </>
        )}
        {currentGame.current?.gameId === newGame?.gameId && newGame && (
          <>
            <hr />
            <p>
              New game created by {user?.username}: {newGame.gameId}
            </p>
            <hr />
          </>
        )}
        <BattleshipsGameComponent
          game={currentGame.current}
          user={user}
          setIsRefreshingGame={setIsRefreshingGame}
        >
          <Button onClick={refreshGame} disabled={isRefreshingGame}>
            Refresh
          </Button>
          {isRefreshingGame && <InfinitySpinnerComponent size={35} />}
        </BattleshipsGameComponent>
      </PageComponent>
    </>
  );
}
