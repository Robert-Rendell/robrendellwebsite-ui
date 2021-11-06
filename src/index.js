import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import App from './app/App.component';
import HomePageComponent from './pages/home/home-page.component';
import SudokuDashboardComponent from './pages/sudoku/dashboard/sudoku-dashboard.component';
import SudokuGameComponent from './pages/sudoku/game/sudoku-game.component';
import StravaDashboardComponent from './pages/strava-api/strava-dashboard.component';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <div class='rob-rendell-website'>
          <Route path="/" element={<HomePageComponent />} />

          <Route path="sudoku" element={<SudokuDashboardComponent />} />
          <Route path="sudoku/play" element={<SudokuGameComponent />} />

          <Route path="strava-api" element={<StravaDashboardComponent />} />
        </div>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
