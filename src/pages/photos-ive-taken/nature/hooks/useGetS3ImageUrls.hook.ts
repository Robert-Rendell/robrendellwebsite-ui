import axios from "axios";
import { useCallback } from "react";
import { S3ImagePageResponse } from "robrendellwebsite-common";
import { Response } from "../../../../models/axios-response-wrapper";
import { S3LoadedThumbnail } from "../../../../components/s3-loaded-image.component";
import { config } from "../../../../config";
import { getS3ImageFilenameFolderFromUrl } from "../../../../common/get-s3-image-filename";
import { S3ImageClickFn } from "../../../../components/full-screen-image/types/types";

type Props = {
  endpoint: string;
  handleImageClickedRef: S3ImageClickFn;
};

export const useGetS3ImageUrls = (props: Props) =>
  useCallback(async () => {
    const response = await axios.get(config.backend + props.endpoint, {
      headers: { "Content-Type": "application/json" },
    });
    const responseTyped = response as Response<S3ImagePageResponse>;
    const dataJsonUrls: string[] = responseTyped.data.s3ImageUrls.filter(
      (url: string) => url.includes(".json")
    );
    const imgUrlArray: string[] = responseTyped.data.s3ImageUrls.filter(
      (url: string) => !url.includes(".json")
    );
    if (imgUrlArray.length === 0) return [];
    return imgUrlArray.map((imgUrl) => {
      const s3UrlFolder = getS3ImageFilenameFolderFromUrl(imgUrl);
      const dataJsonUrl = dataJsonUrls.find((url) =>
        decodeURI(url).includes(s3UrlFolder)
      );
      return S3LoadedThumbnail({
        imgUrl,
        dataJsonUrl,
        onClick: props.handleImageClickedRef,
      });
    });
  }, [config.backend, props]);
