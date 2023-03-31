import React from "react";
import { getS3ImageFilenameFromUrl } from "../common/get-s3-image-filename";
import {
  FullScreenImageClickProps,
  S3ImageClickFn,
  S3ImageUrlWithData,
} from "./full-screen-image/types/types";

type Props = {
  imgUrl: string;
  originalUrl?: string;
  dataJsonUrl?: string;
  onClick: S3ImageClickFn;
};
export function S3LoadedThumbnail(props: Props) {
  return (
    <img
      className="home-page-img"
      src={props.imgUrl}
      title={getS3ImageFilenameFromUrl(props.imgUrl)}
      onClick={() => {
        if (props.onClick.current) {
          let getCurrentS3Image: FullScreenImageClickProps = props.imgUrl;
          if (props.originalUrl) getCurrentS3Image = props.originalUrl;
          if (props.dataJsonUrl) {
            const imgWithData: S3ImageUrlWithData = {
              imageS3Url: props.originalUrl || props.imgUrl,
              dataJsonUrl: props.dataJsonUrl,
            };
            getCurrentS3Image = imgWithData;
          }
          
          props.onClick.current(getCurrentS3Image);
        }
      }}
    />
  );
}
