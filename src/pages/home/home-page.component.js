import React from 'react';
import config from '../../config';
import axios from 'axios';
import './home-page.component.css';

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
      <div class='home-page-margins'>
        <h2>Welcome to robrendell.com</h2>
        <subtitle>last updated: 05/11/21 @ 09.15</subtitle>
        <hr/>
        <h3>Rob Rendell: Node.js Developer</h3>
        <h3>--- CURRENTLY LOOKING FOR WORK ---</h3>
        <br/>
        <h4>This is an ongoing personal project using: Node.js, TypeScript, AWS, React</h4>
        <hr/>
        <h5>Here are some of my own photos from travelling over the years <i>(click to enlarge) - coming soon</i>:</h5>
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