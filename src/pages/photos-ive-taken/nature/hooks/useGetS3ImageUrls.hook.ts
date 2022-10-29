import axios from 'axios';
import { useCallback } from 'react';
import { config } from '../../../../config';

export type S3ImagePageResponse = {
    data: {
        s3ImageUrls: string[];
    }
}

const addPageImage = (imgUrl: string) => {
  return '<img src="' + imgUrl + '"/ onClick={activateLasers}>';
};

export const useGetS3ImageUrls = (endpoint: string, targetDivId: string) => useCallback(() => {
  axios.get(config.backend + endpoint,
    { headers: {'Content-Type': 'application/json'}}
  ).then((response) => {
    const responseTyped = response as S3ImagePageResponse;
    const imgUrlArray: string[] = responseTyped.data.s3ImageUrls;
    const imgPanelDiv: HTMLElement | null = document.getElementById(targetDivId);
    if (imgPanelDiv) {
      imgPanelDiv.innerHTML = '';
      imgUrlArray.forEach((imgUrl) => {
        imgPanelDiv.append(addPageImage(imgUrl));
      });
    } else {
      throw Error(`Could not find div by id: "${targetDivId}"`);
    }
  });
}, [config.backend, addPageImage]);