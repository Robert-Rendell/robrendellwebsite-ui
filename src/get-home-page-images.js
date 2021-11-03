const axios = require('axios');

const getHomePageImageUrl = async function (){
    axios.get("https://robrendellwebsite.herokuapp.com/",
      { headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log()
      const imgUrl = response.data['travelImages'];
      document.getElementById('home-page-img-div').innerHTML = "Message received from backend: " + response.data['travelImages'][0]
      document.getElementById('home-page-img-div').innerHTML = "<img src=\"" + imgUrl + "\"/>"
    })
}

export { getHomePageImageUrl as default }