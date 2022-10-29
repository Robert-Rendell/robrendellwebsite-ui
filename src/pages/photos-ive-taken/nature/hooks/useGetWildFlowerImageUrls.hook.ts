import axios from 'axios';
import { useCallback } from 'react';
import { config } from '../../../../config';

const addPageImage = (imgUrl: string) => {
  return '<img src="' + imgUrl + '"/ onClick={activateLasers}>';
};

const targetDiv = 'wild-flowers-page-img-div';

export const useGetWildFlowersImageUrls = () => useCallback(() => {
  axios.get(config.backend + '/photos-ive-taken/nature/wild-flowers',
    { headers: {'Content-Type': 'application/json'}}
  ).then((response) => {
    const imgUrlArray: string[] = response.data['travelImages'];
    const imgPanelDiv: HTMLElement | null = document.getElementById(targetDiv);
    if (imgPanelDiv) {
      imgPanelDiv.innerHTML = '';
      imgUrlArray.forEach((imgUrl) => {
        imgPanelDiv.append(addPageImage(imgUrl));
      });
    } else {
      throw Error(`Could not find div by id: "${targetDiv}"`);
    }
  });
}, [config.backend, addPageImage]);