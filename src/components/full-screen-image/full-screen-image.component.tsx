import React, { useEffect, useRef, useState } from "react";
import { CloseButton } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { FullScreenImageTitle } from "./full-screen-image-title.component";
import {
  FullScreenImageClickProps,
  S3ImageClickFn,
  S3ImageUrlWithData,
} from "./types/types";
import "./full-screen-image.component.css";

type Props = {
  handleShowRef: S3ImageClickFn;
};

export function FullScreenS3ImageComponent(props: Props) {
  const windowSize = useWindowSize();
  const height = windowSize[1] - 150;
  const [show, setShow] = useState(false);
  const s3ImageSelected = useRef<FullScreenImageClickProps | undefined>();

  useEffect(() => {
    props.handleShowRef.current = (imageS3Url: FullScreenImageClickProps) => {
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
          {typeof s3ImageSelected === "object" && (
            <FullScreenImageTitle
              s3ImageSelected={s3ImageSelected.current as S3ImageUrlWithData}
            />
          )}
          <CloseButton variant="white" onClick={() => setShow(false)} />
        </Modal.Header>
        <Modal.Body className="centred">
          {s3ImageSelected && (
            <img
              src={
                typeof s3ImageSelected.current === "string"
                  ? s3ImageSelected.current
                  : s3ImageSelected.current?.imageS3Url
              }
              height={height}
            />
          )}
          {!s3ImageSelected && <h1>No image selected!</h1>}
        </Modal.Body>
      </Modal>
    </>
  );
}
