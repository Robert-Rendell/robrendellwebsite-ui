import React from "react";
import { S3ImageClickFn } from "./full-screen-image.component";

export function S3LoadedImage(imgUrl: string, onClick: S3ImageClickFn) {
  return (
    <img
      className="home-page-img"
      src={imgUrl}
      onClick={() => {
        if (onClick.current) onClick.current(imgUrl);
      }}
    />
  );
}
