import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { HomePageOriginalImgsMap } from 'robrendellwebsite-common';
import { useWindowSize } from '../hooks/use-window-size.hook';
import './full-screen-image.component.css';

export type S3ImageClickFn = MutableRefObject<((imageS3Url: string) => void) | undefined>;

type Props = {
    handleShowRef: S3ImageClickFn,
    originals: HomePageOriginalImgsMap,
}

export function FullScreenS3ImageComponent(props: Props) {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  const height = windowSize[1]-150;
  const [show, setShow] = useState(false);
  const s3ImageSelected = useRef<string | undefined>();

  useEffect(() => {
    props.handleShowRef.current = (imageS3Url: string) => {
      setShow(true);
      console.log('useEffect','FullScreenS3ImageComponent', Object.values(props.originals));
      const selectedImage = (Object.values(props.originals) as any)[imageS3Url];
      s3ImageSelected.current = selectedImage;
    };
  }, []);


  return (
    <>
      <Modal className="full-screen-image-modal" show={show} fullscreen={true} onHide={() => setShow(false)} width={width}>
        <Modal.Header className="full-screen-image-modal">
          <CloseButton variant="white" onClick={() => setShow(false)}/>
        </Modal.Header>
        <Modal.Body>
          <img src={s3ImageSelected.current || ''} width={width} height={height} />
        </Modal.Body>
      </Modal>
    </>
  );
}