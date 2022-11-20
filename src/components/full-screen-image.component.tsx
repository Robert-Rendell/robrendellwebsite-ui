import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { CloseButton } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useWindowSize } from "../hooks/use-window-size.hook";
import "./full-screen-image.component.css";

export type S3ImageClickFn = MutableRefObject<
  ((imageS3Url: string) => void) | undefined
>;

type Props = {
  handleShowRef: S3ImageClickFn;
};

export function FullScreenS3ImageComponent(props: Props) {
  const windowSize = useWindowSize();
  const height = windowSize[1] - 150;
  const [show, setShow] = useState(false);
  const s3ImageSelected = useRef<string | undefined>();

  useEffect(() => {
    props.handleShowRef.current = (imageS3Url: string) => {
      setShow(true);
      s3ImageSelected.current = imageS3Url;
    };
  }, []);

  return (
    <>
      <Modal
        className="full-screen-image-modal"
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
        height={height}
      >
        <Modal.Header className="full-screen-image-modal">
          <CloseButton variant="white" onClick={() => setShow(false)} />
        </Modal.Header>
        <Modal.Body className="centred">
          {s3ImageSelected && (
            <img src={s3ImageSelected.current || ""} height={height} />
          )}
          {!s3ImageSelected && <h1>No image selected!</h1>}
        </Modal.Body>
      </Modal>
    </>
  );
}
