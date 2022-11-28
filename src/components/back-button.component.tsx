import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

type Props = {
  closeWindow?: boolean
}

const goBack = () => window.location.href = "./";
const closeWindow = () => window.close();

export function RobBackButton(props: Props) {
  return (
    <>
      <Button onClick={() => props.closeWindow ? closeWindow() : goBack()}>
        <ArrowLeft />
        &nbsp;Back
      </Button>
    </>
  );
}
