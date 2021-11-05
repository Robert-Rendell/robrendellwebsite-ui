import './App.component.css';
import React from 'react';
import getHomePageImageUrls from '../pages/home/get-home-page-images';
import NavComponent from '../nav/nav.component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
      <Router>
        <div className="App">
          <NavComponent />
          <header className="App-header">
            <h2>Welcome to robrendell.com</h2>
            <h4>Technologies: Node.js, TypeScript, AWS, React</h4>
            <div id="home-page-img-div"></div>
          </header>
        </div>
        <Routes>
          <Route path="/sudoku">
            
          </Route>
          <Route path="/strava-api">
            
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
