import './App.component.css';
import React from 'react';
import NavComponent from '../nav/nav.component';
import HomePageComponent from '../pages/home/home-page.component';
import SudokuDashboardComponent from '../pages/sudoku/sudoku-dashboard.component';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // load
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavComponent />
          <header className="App-header">
            <HomePageComponent />
          </header>
        </div>
        <Routes>
          <Route path="/">
            <h1>test</h1>
          </Route>
          <Route path="/sudoku">
            <SudokuDashboardComponent />
          </Route>
          <Route path="/strava-api">
            
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
