import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

type Props = {
  closeWindow?: boolean;
  backTwo?: boolean;
};

const closeWindow = () => window.close();

export function RobBackButton(props: Props) {
  const goBack = () => (window.location.href = !props.backTwo ? "./" : "../");
  return (
    <>
      <Button onClick={() => (props.closeWindow ? closeWindow() : goBack())}>
        <ArrowLeft />
        &nbsp;Back
      </Button>
    </>
  );
}
