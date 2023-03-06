import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { usePreferences } from "../../hooks/use-preferences.hook";
import { NewTabLink } from "../../components/new-tab-link.component";

type Props = {
  joinLinkGameId?: BattleshipsGameId;
};
export function BattleshipsDashboardComponent(props: Props) {
  const { preferences } = usePreferences();
  const [isCreatingGame, setIsCreatingGame] = useState(false);
  const [isJoiningGame, setIsJoiningGame] = useState(false);
  const isRefreshingGameRef = useState(false);
  const [isRefreshingGame, setIsRefreshingGame] = isRefreshingGameRef;

  const currentGame = useRef<BattleshipsGame | undefined>();
  const joinGameId = useRef<BattleshipsGameId>("");
  const userState = useState<BattleshipsUser>();
  const [user, setUser] = userState;

  useEffect(() => {
    if (preferences?.battleships?.username) {
      setUser({ username: preferences.battleships.username, battles: [] });
      if (props.joinLinkGameId) {
        setIsJoiningGame(true);
      }
    }
  }, [preferences?.battleships?.username, props.joinLinkGameId, setUser]);

  useGetBattleshipsGame({
    gameId: currentGame.current?.gameId,
    isRefreshingGame,
    reset: (game?: BattleshipsGame) => {
      if (game) {
        currentGame.current = game;
      }
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
    gameId: props.joinLinkGameId || joinGameId.current,
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
              Joined{" "}
              <NewTabLink
                href={`${SharedRoutes.Battleships.Play}/${currentGame.current?.gameId}`}
              >
                {joinedGame.playerUsernames[0]}&apos;s game:{" "}
              </NewTabLink>
            </p>
            <hr />
          </>
        )}
        {currentGame.current?.gameId === newGame?.gameId && newGame && (
          <>
            <hr />
            <p>
              New game created by {user?.username}:{" "}
              <NewTabLink
                href={`${SharedRoutes.Battleships.Play}/${newGame.gameId}`}
              >
                Share link
              </NewTabLink>
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
