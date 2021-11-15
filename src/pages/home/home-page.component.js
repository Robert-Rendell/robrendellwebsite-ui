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
      <div class="home-page-margins page-styling">
        <h2 class="centred">Welcome to robrendell.com</h2>
        <h3>Rob Rendell: Node.js Developer (--- CURRENTLY LOOKING FOR WORK ---)</h3>
        <h4>Recent developments:</h4>
        <ul>
          <li>15/11/21 @ 15.53 - Enabled Sudoku Project. It is currently using <code>AWS.DynamoDB.getItem</code></li>
          <li>05/11/21 @ 09.15 - Home page images loading using <code>AWS.S3.getSignedUrlPromise</code> and <code>AWS.S3.listObjectsV2</code></li>
        </ul>
        <hr/>
        <h4>This website is an ongoing personal project using:</h4>
        <ul>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>AWS</li>
          <li>React</li>
        </ul>
        <hr/>
        <p>Here are some of my own photos from travelling over the years <i>(click to enlarge - coming soon)</i>:</p>
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