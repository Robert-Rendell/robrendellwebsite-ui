import logo from '../resources/logo.svg';
import './App.component.css';
import React from 'react';
import getHomePageImageUrls from '../home/get-home-page-images';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    getHomePageImageUrls();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to robrendell.com</h2>
          <h4>Technologies: Node.js, TypeScript, AWS, React</h4>
          <div id="home-page-img-div"></div>
        </header>
      </div>
    );
  }
}

export default App;
