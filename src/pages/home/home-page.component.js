import React from 'react';
import config from '../../config';
import axios from 'axios';

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.getHomePageImageUrls();
  }

  render() {
    return (
      <div>
        <h2>Welcome to robrendell.com</h2>
        <h4>Technologies: Node.js, TypeScript, AWS, React</h4>
        <div id="home-page-img-div"></div>
      </div>
    );
  }

  addHomePageImage(imgUrl) {
    return "<img class=\"home-page-img\" src=\"" + imgUrl + "\"/ onClick={activateLasers}>";
  };

  getHomePageImageUrls() {
    axios.get(config.backend,
      { headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log()
      const imgUrlArray = response.data['travelImages'];
      const imgPanelDiv = document.getElementById('home-page-img-div')
      imgUrlArray.forEach((imgUrl) => {
        imgPanelDiv.innerHTML += this.addHomePageImage(imgUrl);
      });
      document.getElementById('home-page-img-div')
    })
  }
}


export default HomePageComponent;