import axios from 'axios';
import { useCallback } from 'react';
import { S3ImageClickFn } from '../../../components/full-screen-image.component';
import { S3LoadedImage } from '../../../components/s3-loaded-image.component';
import { config } from '../../../config';

export const useGetHomePageImageUrls = (handleImageClickedRef: S3ImageClickFn) => useCallback(async () => {
  const response = await axios.get(config.backend,
    { headers: {'Content-Type': 'application/json'}}
  );
  const imgUrlArray: string[] = response.data['travelImages'];
  const images = imgUrlArray.map((imgUrl) => S3LoadedImage(imgUrl, handleImageClickedRef));
  return images;
}, [config.backend, S3LoadedImage]);