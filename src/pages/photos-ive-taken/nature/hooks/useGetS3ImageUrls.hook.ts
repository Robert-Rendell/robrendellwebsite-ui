import axios from "axios";
import { useCallback } from "react";
import { S3ImagePageResponse } from "robrendellwebsite-common";
import { S3LoadedThumbnail } from "../../../../components/s3-loaded-image.component";
import { config } from "../../../../config";
import {
  getS3ImageFilenameFolderFromUrl,
  getS3ImageFilenameFromUrl,
} from "../../../../common/get-s3-image-filename";
import { S3ImageClickFn } from "../../../../components/full-screen-image/types/types";

type Props = {
  endpoint: string;
  handleImageClickedRef: S3ImageClickFn;
};

export const useGetS3ImageUrls = (props: Props) =>
  useCallback(async () => {
    const response = await axios.get<S3ImagePageResponse>(
      config.backend + props.endpoint,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const dataJsonUrls: string[] = response.data.s3ImageUrls.filter(
      (url: string) => url.includes(".json")
    );
    const imgUrlArray: string[] = response.data.s3ImageUrls.filter(
      (url: string) => !url.includes(".json") && !url.includes("thumbnail")
    );
    const thumbnailUrlArray: string[] = response.data.s3ImageUrls.filter(
      (url: string) => !url.includes(".json") && url.includes("thumbnail")
    );
    if (imgUrlArray.length === 0) return [];
    return imgUrlArray.map((imgUrl) => {
      const s3UrlFilename = getS3ImageFilenameFromUrl(imgUrl);
      const thumbnailUrl = thumbnailUrlArray.find((url) =>
        decodeURI(url).includes(s3UrlFilename)
      );
      const s3UrlFolder = getS3ImageFilenameFolderFromUrl(imgUrl);
      const dataJsonUrl = dataJsonUrls.find((url) =>
        decodeURI(url).includes(s3UrlFolder)
      );
      return S3LoadedThumbnail({
        imgUrl: thumbnailUrl || imgUrl,
        originalUrl: imgUrl,
        dataJsonUrl,
        onClick: props.handleImageClickedRef,
      });
    });
  }, [props]);
