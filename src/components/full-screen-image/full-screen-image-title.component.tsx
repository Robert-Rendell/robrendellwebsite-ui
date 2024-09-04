import React, { useEffect, useState } from "react";
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
  const [jsonData, setJsonData] = useState<KeepNote | undefined>();
  useEffect(() => {
    getImageData().then((val) => {
      setJsonData(val);
    });
  }, []);
  return (
    <>
      {jsonData ? (
        <>
          <span>
            <u>{jsonData?.title}</u>
          </span>
          <span>
            {jsonData?.title && ":"} {jsonData?.textContent}
          </span>
        </>
      ) : (
        "Loading photo data..."
      )}
    </>
  );
}
