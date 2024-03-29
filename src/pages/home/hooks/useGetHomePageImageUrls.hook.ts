import axios from "axios";
import { useCallback } from "react";
import { HomePageResponse } from "robrendellwebsite-common";
import { S3LoadedThumbnail } from "../../../components/s3-loaded-image.component";
import { config } from "../../../config";
import { getS3ImageFilenameFromUrl } from "../../../common/get-s3-image-filename";
import { S3ImageClickFn } from "../../../components/full-screen-image/types/types";

export type UseGetHomePageImageUrlsReturnType = {
  thumbnails: JSX.Element[];
  originalImgUrls: string[];
};

export const useGetHomePageImageUrls = (
  handleImageClickedRef: S3ImageClickFn
) =>
  useCallback(async () => {
    const response = await axios.get<HomePageResponse>(config.backend, {
      headers: { "Content-Type": "application/json" },
    });
    const thumbnailImgUrls: string[] = response.data.travelImages;
    const originalImgUrls: string[] = response.data.originalTravelImages;
    const thumbnails = thumbnailImgUrls.map((imgUrl) => {
      const originalUrl = originalImgUrls.find((item) =>
        imgUrl.includes(getS3ImageFilenameFromUrl(item))
      );
      return S3LoadedThumbnail({
        imgUrl,
        originalUrl,
        onClick: handleImageClickedRef,
      });
    });
    const output: UseGetHomePageImageUrlsReturnType = {
      thumbnails,
      originalImgUrls,
    };
    return output;
  }, [handleImageClickedRef]);
