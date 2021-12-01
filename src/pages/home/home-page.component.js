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
      <div className="home-page-margins page-styling">
        <h2 className="centred">Welcome to robrendell.com</h2>
        <h3>Rob Rendell: Node.js Developer</h3>
        <h4>Recent developments:</h4>
        <ul>
          <li>
            01/12/21 @ 07.00 - <a href="technical-tests/291121">Technical Test</a> completed
            <ul>
              <li>
                University data visualiser with back end express API using AWS S3 for storage
              </li>
            </ul>
          </li>
          <li>28/11/21 @ 14.00 - AWS Lambda running my Python <a href="sudoku/">Sudoku generation</a> code; triggered by front end.</li>
          <li>16/11/21 @ 12.45 - Enabled &apos;Validate&apos; <a href="sudoku/play/0/">Sudoku Project</a> button.</li>
          <li>15/11/21 @ 15.53 - Enabled <a href="sudoku/">Sudoku Project</a>. It is currently using <code>AWS.DynamoDB.getItem</code></li>
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
        <div id="home-page-img-div">
          <h2>Loading images from S3...</h2>
        </div>
      </div>
    );
  }

  addHomePageImage(imgUrl) {
    return "<img class=\"home-page-img\" src=\"" + imgUrl + "\"/ onClick={activateLasers}>";
  }

  getHomePageImageUrls() {
    axios.get(config.backend,
      { headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log()
      const imgUrlArray = response.data['travelImages'];
      const imgPanelDiv = document.getElementById('home-page-img-div')
      imgPanelDiv.innerHTML = '';
      imgUrlArray.forEach((imgUrl) => {
        imgPanelDiv.innerHTML += this.addHomePageImage(imgUrl);
      });
      document.getElementById('home-page-img-div')
    })
  }
}


export default HomePageComponent;