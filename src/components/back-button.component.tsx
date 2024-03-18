import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

type Props = {
  closeWindow?: boolean;
  backTwo?: boolean;
  areYouSureDialog?: boolean;
};

const closeWindow = () => window.close();

export function RobBackButton(props: Props) {
  const showAreYouSureDialogState = useState<boolean>(false);
  const [areYouSureVisible, setAreYouSureVisible] = showAreYouSureDialogState;
  const goBack = () => (window.location.href = !props.backTwo ? "./" : "../");
  const defaultOnClick = () => (props.closeWindow ? closeWindow() : goBack());

  window.onbeforeunload = function (event) {
    if (props.areYouSureDialog && !areYouSureVisible) {
      event.preventDefault();
      event.returnValue = true;
    } else {
      event.returnValue = "";
    }
  };

  return (
    <>
      {props.areYouSureDialog && (
        <>
          <AreYouSureDialog
            exitFn={() => {
              goBack();
            }}
            showState={showAreYouSureDialogState}
          />{" "}
        </>
      )}
      {
        <Button
          onClick={
            !props.areYouSureDialog
              ? defaultOnClick
              : () => setAreYouSureVisible(true)
          }
        >
          <ArrowLeft />
          &nbsp;Back
        </Button>
      }
    </>
  );
}

function AreYouSureDialog({
  showState,
  exitFn,
}: {
  exitFn: () => void;
  showState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const [show, setShow] = showState;

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leaving page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If you leave this page now, you will lose your current progress.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={exitFn}>
            Leave page without saving
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
