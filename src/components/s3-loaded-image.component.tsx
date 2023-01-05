import React from "react";
import { getS3ImageFilenameFromUrl } from "../common/get-s3-image-filename";
import { S3ImageClickFn } from "./full-screen-image.component";

type Props = {
  imgUrl: string, originalUrl?: string, onClick: S3ImageClickFn
}
export function S3LoadedThumbnail(props: Props) {
  return (
    <img
      className="home-page-img"
      src={props.imgUrl}
      title={getS3ImageFilenameFromUrl(props.imgUrl)}
      onClick={() => {
        if (props.onClick.current) props.onClick.current(props.originalUrl ? props.originalUrl : props.imgUrl);
      }}
    />
  );
}
