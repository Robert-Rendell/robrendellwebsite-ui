import axios from "axios";
import { useCallback } from "react";
import { Response } from "../../../models/axios-response-wrapper";
import { HomePageResponse } from "robrendellwebsite-common";
import { S3ImageClickFn } from "../../../components/full-screen-image.component";
import { S3LoadedImage } from "../../../components/s3-loaded-image.component";
import { config } from "../../../config";

export const useGetHomePageImageUrls = (
  handleImageClickedRef: S3ImageClickFn
) =>
  useCallback(async () => {
    const response: Response<HomePageResponse> = await axios.get(
      config.backend,
      { headers: { "Content-Type": "application/json" } }
    );
    const thumbnailImgUrls: string[] = response.data.travelImages;
    const thumbnails = thumbnailImgUrls.map((imgUrl) =>
      S3LoadedImage(imgUrl, handleImageClickedRef)
    );
    return { thumbnails };
  }, [config.backend, S3LoadedImage]);
