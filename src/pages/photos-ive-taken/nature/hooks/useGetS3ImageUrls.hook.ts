import axios from 'axios';
import { useCallback } from 'react';
import { config } from '../../../../config';

export type S3ImagePageResponse = {
    data: {
        s3ImageUrls: string[];
    }
}

const addPageImage = (imgUrl: string) => {
  return '<img class="s3-loaded-image" src="' + imgUrl + '"/ width={width/2}>';
};

export const useGetS3ImageUrls = (opts: { endpoint: string, targetDivId: string }) => useCallback(() => {
  axios.get(config.backend + opts.endpoint,
    { headers: {'Content-Type': 'application/json'}}
  ).then((response) => {
    const responseTyped = response as S3ImagePageResponse;
    const imgUrlArray: string[] = responseTyped.data.s3ImageUrls.filter((url) => !url.includes('.json'));
    const imgPanelDiv: HTMLElement | null = document.getElementById(opts.targetDivId);
    if (imgPanelDiv) {
      if (imgUrlArray.length === 0) {
        imgPanelDiv.innerHTML = `No images in S3 bucket for path: ${opts.endpoint}`;
        return;
      }
      imgPanelDiv.innerHTML = '';
      imgUrlArray.forEach((imgUrl) => {
        imgPanelDiv.innerHTML += addPageImage(imgUrl);
      });
    } else {
      throw Error(`Could not find div by id: "${opts.targetDivId}"`);
    }
  });
}, [config.backend, addPageImage]);