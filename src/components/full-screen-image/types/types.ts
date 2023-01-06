import { MutableRefObject } from "react";

export type FullScreenImageClickProps = string | S3ImageUrlWithData;
export type S3ImageUrlWithData = {
  imageS3Url: string;
  dataJsonUrl: string;
};
export type S3ImageClickFn = MutableRefObject<
  ((imageS3Url: FullScreenImageClickProps) => void) | undefined
>;
