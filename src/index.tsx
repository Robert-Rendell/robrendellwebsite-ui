import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import App from './app/App.component';
import { HomePage } from './pages/home/home.page';
import SudokuDashboardComponent from './pages/sudoku/dashboard/sudoku-dashboard.component';
import SudokuGameComponent from './pages/sudoku/game/sudoku-game.component';
import UniDataVisualiserComponent from './pages/technical-tests/291121/uni-data-visualiser.component'
import StravaDashboardComponent from './pages/strava-api/strava-dashboard.component';
import RecursionPageComponent from './pages/recursion/recursion.page'
import { BifurcationLogisticalPage } from './pages/recursion/bifurcation-logistical.page';
import { RuminantsPage } from './pages/climate-change/ruminants.page';
import { RideABikePage } from './pages/climate-change/ride-a-bike.page';
import { OceanAcidification } from './pages/climate-change/ocean-acidification.page';
import { WildFlowersPage } from './pages/photos-ive-taken/nature/wild-flowers.page';
import { ArachnidsPage } from './pages/photos-ive-taken/nature/arachnids.page';
import { LichenPage } from './pages/photos-ive-taken/nature/lichen.page';
import { InsectsPage } from './pages/photos-ive-taken/nature/insects.page';
import { ReduceReuseRecyclePage } from './pages/climate-change/reduce-reuse-recycle.page';
import { RenewableEnergyPage } from './pages/climate-change/renewable-energy.page';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="sudoku" element={<SudokuDashboardComponent />} />
          <Route path="sudoku/play" element={<SudokuGameComponent />} />
          <Route path="sudoku/play/:sudokuId" element={<PlaySudoku />} />

          <Route path="recursion" element={<RecursionPageComponent />} />
          <Route path="recursion/bifurcation-logistical-map" element={<BifurcationLogisticalPage />} />

          <Route path="climate-change/ruminants" element={<RuminantsPage />} />
          <Route path="climate-change/ocean-acidification" element={<OceanAcidification />} />
          <Route path="climate-change/ride-a-bike" element={<RideABikePage />} />
          <Route path="climate-change/renewable-energy" element={<RenewableEnergyPage />} />
          <Route path="climate-change/reduce-reuse-recycle" element={<ReduceReuseRecyclePage />} />

          <Route path="photos-ive-taken/nature/arachnids" element={<ArachnidsPage />} />
          <Route path="photos-ive-taken/nature/insects" element={<InsectsPage />} />
          <Route path="photos-ive-taken/nature/lichen" element={<LichenPage />} />
          <Route path="photos-ive-taken/nature/wild-flowers" element={<WildFlowersPage />} />
          

          <Route path="/technical-tests/291121" element={<UniDataVisualiserComponent />} />

          <Route path="strava-api" element={<StravaDashboardComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

function PlaySudoku() {
  const { sudokuId } = useParams();
  return <SudokuGameComponent sudokuId={sudokuId}/>;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
