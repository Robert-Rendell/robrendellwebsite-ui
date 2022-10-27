import axios from 'axios';
import { useCallback } from 'react';
import { config } from '../../../config';

const addHomePageImage = (imgUrl: string) => {
  return '<img class="home-page-img" src="' + imgUrl + '"/ onClick={activateLasers}>';
};

export const useGetHomePageImageUrls = () => useCallback(() => {
  axios.get(config.backend,
    { headers: {'Content-Type': 'application/json'}}
  ).then((response) => {
    const imgUrlArray: string[] = response.data['travelImages'];
    const imgPanelDiv: HTMLElement | null = document.getElementById('home-page-img-div');
    if (imgPanelDiv) {
      imgPanelDiv.innerHTML = '';
      imgUrlArray.forEach((imgUrl) => {
        imgPanelDiv.innerHTML += addHomePageImage(imgUrl);
      });
    } else {
      throw Error('Could not find div by id: "home-page-img-div"');
    }
  });
}, [config.backend, addHomePageImage]);