import React from "react";
import { Button } from "react-bootstrap";
import { BattleshipsUser } from "robrendellwebsite-common";

type Props = {
  user?: BattleshipsUser;
};
export function BattleshipsUserComponent(props: Props) {
  return (
    <>
      {!props.user && <Button disabled>Login</Button>}
      {props.user && <Button>Logout [{props.user.username}]</Button>}
    </>
  );
}
