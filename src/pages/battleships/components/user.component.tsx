import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { BattleshipsUser } from "robrendellwebsite-common";
import { usePreferences } from "../../../hooks/use-preferences.hook";

type Props = {
  userState: [
    BattleshipsUser | undefined,
    React.Dispatch<React.SetStateAction<BattleshipsUser | undefined>>
  ];
};
export function BattleshipsUserComponent(props: Props) {
  const { preferences, savePreferences } = usePreferences();
  const [user, setUser] = props.userState;

  const login = useCallback(() => {
    let username = preferences?.battleships?.username;
    if (!username) {
      username = prompt("Enter your username") || "";
    }
    setUser({ username, battles: [] });
    savePreferences({ battleships: { username } });
  }, [preferences?.battleships?.username, savePreferences, setUser]);

  return (
    <>
      {!user && <Button onClick={login}>Login</Button>}
      {user && <Button disabled>Logout [{user.username}]</Button>}
    </>
  );
}
