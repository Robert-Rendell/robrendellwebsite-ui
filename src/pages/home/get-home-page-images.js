import config from '../../config';
import axios from 'axios';
import addHomePageImage from './home-image.component'

const getHomePageImageUrls = async function() {
    axios.get(config.backend,
      { headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log()
      const imgUrlArray = response.data['travelImages'];
      const imgPanelDiv = document.getElementById('home-page-img-div')
      imgUrlArray.forEach((imgUrl) => {
        imgPanelDiv.innerHTML += addHomePageImage(imgUrl);
      });
      document.getElementById('home-page-img-div')
    })
}

export { getHomePageImageUrls as default }