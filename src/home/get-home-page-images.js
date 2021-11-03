import config from '../config';
import axios from 'axios';

const getHomePageImageUrls = async function() {
    axios.get(config.backend,
      { headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log()
      const imgUrlArray = response.data['travelImages'];
      const imgPanelDiv = document.getElementById('home-page-img-div')
      imgUrlArray.forEach((imgUrl) => {
        imgPanelDiv.innerHTML += "<img class=\"home-page-img\" src=\"" + imgUrl + "\"/>";
      });
      document.getElementById('home-page-img-div')
    })
}

export { getHomePageImageUrls as default }