import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import { HomePage } from "./pages/home/home.page";
import SudokuDashboardComponent from "./pages/sudoku/dashboard/sudoku-dashboard.component";
import { SudokuGameComponent } from "./pages/sudoku/game/sudoku-game.component";
import UniDataVisualiserComponent from "./pages/technical-tests/291121/uni-data-visualiser.component";
import { RuminantsPage } from "./pages/climate-change/ruminants.page";
import { RideABikePage } from "./pages/climate-change/ride-a-bike.page";
import { OceanAcidification } from "./pages/climate-change/ocean-acidification.page";
import { WildFlowersPage } from "./pages/photos-ive-taken/nature/wild-flowers.page";
import { ArachnidsPage } from "./pages/photos-ive-taken/nature/arachnids.page";
import { LichenPage } from "./pages/photos-ive-taken/nature/lichen.page";
import { InsectsPage } from "./pages/photos-ive-taken/nature/insects.page";
import { ReduceReuseRecyclePage } from "./pages/climate-change/reduce-reuse-recycle.page";
import { RenewableEnergyPage } from "./pages/climate-change/renewable-energy.page";
import { ClimateChangeLandingPage } from "./pages/climate-change/landing.page";
import { FungiPage } from "./pages/photos-ive-taken/nature/fungi.page";
import { IndiaPage } from "./pages/misc/india.page";
import { GiantPacificOctopusPage } from "./pages/misc/giant-pacific-octopus.page";
import { RobRendellFooterComponent } from "./components/footer/rob-rendell-footer.component";
import { SharedRoutes } from "./common/shared-routes";
import { Compass } from "react-bootstrap-icons";

import { OperationsDashboardPage } from "./operations/dashboard.page";
import { ScotchWhiskyPage } from "./pages/misc/scotch-whisky.page";
import { WordOfTheDayPage } from "./pages/misc/word-of-the-day.page";
import { InterestingDatesInHistoryPage } from "./pages/misc/interesting-dates-in-history.page";
import { PhilosophyPage } from "./pages/misc/philosophy.page";
import { NobelPrizePage } from "./pages/misc/nobel-prize.page";
import { MidJourneyPage } from "./pages/misc/midjourney.page";
import { NavComponent } from "./nav/nav.component";
import { StravaDashboardHistoricalComponent } from "./pages/strava-api/strava-dashboard-historical.component";
import { JamesWebbTelescopePage } from "./pages/misc/james-webb-telescope.page";
import { PaintingsAndArtPage } from "./pages/misc/paintings-and-art.page";
import { BattleshipsDashboardComponent } from "./pages/battleships/dashboard.page";
import { CustomAnalyticsPage } from "./pages/custom-analytics/custom-analytics.page";

const maintenanceMode = false;

createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    {maintenanceMode ? (
      <>
        <div style={{ color: "white", background: "black" }}>
          ... Be back soon! <Compass />
        </div>
      </>
    ) : (
      <>
        <BrowserRouter>
          <NavComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path={SharedRoutes.Operations.Dashboard}
              element={<OperationsDashboardPage />}
            />

            {/* //////////////////////////////////// */}
            <Route path="sudoku" element={<SudokuDashboardComponent />} />
            <Route path="sudoku/play" element={<SudokuGameComponent />} />
            <Route path="sudoku/play/:sudokuId" element={<PlaySudoku />} />

            {/* //////////////////////////////////// */}
            <Route
              path={SharedRoutes.Battleships.Dashboard}
              element={<BattleshipsDashboardComponent />}
            />
            <Route
              path={`${SharedRoutes.Battleships.Play}/:gameId`}
              element={<PlayBattleships />}
            />

            {/* //////////////////////////////////// */}
            <Route
              path={`${SharedRoutes.CustomAnalytics.LandingPage}`}
              element={<CustomAnalyticsPage />}
            />

            {/* //////////////////////////////////// */}
            <Route
              path={SharedRoutes.ClimateChange.LandingPage}
              element={<ClimateChangeLandingPage />}
            />
            <Route
              path={SharedRoutes.ClimateChange.Ruminants}
              element={<RuminantsPage />}
            />
            <Route
              path={SharedRoutes.ClimateChange.OceanAcidification}
              element={<OceanAcidification />}
            />
            <Route
              path={SharedRoutes.ClimateChange.RideABike}
              element={<RideABikePage />}
            />
            <Route
              path={"climate-change/renewable-energy"}
              element={<RenewableEnergyPage />}
            />
            <Route
              path={"climate-change/reduce-reuse-recycle"}
              element={<ReduceReuseRecyclePage />}
            />
            {/* //////////////////////////////////// */}
            <Route
              path={SharedRoutes.Miscellaneous.India}
              element={<IndiaPage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.ScotchWhisky}
              element={<ScotchWhiskyPage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.WordOfTheDay}
              element={<WordOfTheDayPage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.InterestingDatesInHistory}
              element={<InterestingDatesInHistoryPage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.GiantPacificOctopus}
              element={<GiantPacificOctopusPage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.Philosophy}
              element={<PhilosophyPage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.NobelPrize}
              element={<NobelPrizePage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.Midjourney}
              element={<MidJourneyPage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.JamesWebbTelescope}
              element={<JamesWebbTelescopePage />}
            />
            <Route
              path={SharedRoutes.Miscellaneous.PaintingsAndArt}
              element={<PaintingsAndArtPage />}
            />
            {/* //////////////////////////////////// */}
            <Route
              path="photos-ive-taken/nature/arachnids"
              element={<ArachnidsPage />}
            />
            <Route
              path="photos-ive-taken/nature/insects"
              element={<InsectsPage />}
            />
            <Route
              path="photos-ive-taken/nature/lichen"
              element={<LichenPage />}
            />
            <Route
              path="photos-ive-taken/nature/wild-flowers"
              element={<WildFlowersPage />}
            />
            <Route
              path="photos-ive-taken/nature/fungi"
              element={<FungiPage />}
            />

            {/* //////////////////////////////////// */}
            <Route
              path="/technical-tests/291121"
              element={<UniDataVisualiserComponent />}
            />

            {/* //////////////////////////////////// */}
            <Route
              path={SharedRoutes.StravaAPI.Historical}
              element={<StravaDashboardHistoricalComponent />}
            />
          </Routes>
          <RobRendellFooterComponent />
        </BrowserRouter>
      </>
    )}
  </React.StrictMode>
);

function PlaySudoku() {
  const { sudokuId } = useParams();
  return <SudokuGameComponent sudokuId={sudokuId} />;
}

function PlayBattleships() {
  const { gameId } = useParams();
  return <BattleshipsDashboardComponent joinLinkGameId={gameId} />;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
