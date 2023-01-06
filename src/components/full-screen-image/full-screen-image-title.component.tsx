import React, { useEffect, useRef } from "react";
import { KeepNote } from "robrendellwebsite-common";
import { useGetImageData } from "./hooks/useGetImageData";
import { S3ImageUrlWithData } from "./types/types";
type Props = {
  s3ImageSelected?: S3ImageUrlWithData;
};

export function FullScreenImageTitle(props: Props) {
  const getImageData = useGetImageData({
    jsonDataS3Url: props.s3ImageSelected?.dataJsonUrl || "",
  });
  const jsonData = useRef<KeepNote | undefined>();
  useEffect(() => {
    getImageData().then((val) => {
      jsonData.current = val;
    });
  }, []);
  return (
    <>
      {jsonData.current ? (
        <span>{jsonData.current?.title}</span>
      ) : (
        "Loading photo data..."
      )}
    </>
  );
}
