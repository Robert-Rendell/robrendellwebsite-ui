import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { BattleshipsGame, BattleshipsUser } from "robrendellwebsite-common";
import { SharedRoutes } from "../../../common/shared-routes";
import { usePreferences } from "../../../hooks/use-preferences.hook";

type Props = {
  userState: [
    BattleshipsUser | undefined,
    React.Dispatch<React.SetStateAction<BattleshipsUser | undefined>>
  ];
  currentGame?: BattleshipsGame;
};
export function BattleshipsUserComponent(props: Props) {
  const { preferences, savePreferences } = usePreferences();
  const [user, setUser] = props.userState;

  const login = useCallback(() => {
    let username = preferences?.battleships?.username;
    if (!username) {
      username =
        prompt("Enter your username") || `user-${new Date().toISOString()}`;
    }
    setUser({ username, battles: [] });
    savePreferences({ battleships: { username } });
  }, [preferences?.battleships?.username, savePreferences, setUser]);

  const logout = useCallback(() => {
    if (props.currentGame) {
      if (confirm("Are you sure? Logging out will exit your current game")) {
        savePreferences({ battleships: { username: undefined } });
        setUser(undefined);
        window.location.href = SharedRoutes.Battleships.Dashboard;
      }
    } else {
      savePreferences({ battleships: { username: undefined } });
      setUser(undefined);
    }
  }, [props.currentGame, savePreferences, setUser]);

  return (
    <>
      {!user && <Button onClick={login}>Login</Button>}
      {user && <Button onClick={logout}>Logout [{user.username}]</Button>}
    </>
  );
}
