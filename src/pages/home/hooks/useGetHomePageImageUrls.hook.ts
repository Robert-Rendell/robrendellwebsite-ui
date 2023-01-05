import axios from "axios";
import { useCallback } from "react";
import { Response } from "../../../models/axios-response-wrapper";
import { HomePageResponse } from "robrendellwebsite-common";
import { S3ImageClickFn } from "../../../components/full-screen-image.component";
import { S3LoadedThumbnail } from "../../../components/s3-loaded-image.component";
import { config } from "../../../config";
import { getS3ImageFilenameFromUrl } from "../../../common/get-s3-image-filename";

export type UseGetHomePageImageUrlsReturnType = {
  thumbnails: JSX.Element[];
  originalImgUrls: string[];
};

export const useGetHomePageImageUrls = (
  handleImageClickedRef: S3ImageClickFn
) =>
  useCallback(async () => {
    const response: Response<HomePageResponse> = await axios.get(
      config.backend,
      { headers: { "Content-Type": "application/json" } }
    );
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
  }, [config.backend, S3LoadedThumbnail]);
