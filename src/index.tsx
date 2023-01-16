import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import App from "./app/App.component";
import { HomePage } from "./pages/home/home.page";
import SudokuDashboardComponent from "./pages/sudoku/dashboard/sudoku-dashboard.component";
import SudokuGameComponent from "./pages/sudoku/game/sudoku-game.component";
import UniDataVisualiserComponent from "./pages/technical-tests/291121/uni-data-visualiser.component";
import StravaDashboardComponent from "./pages/strava-api/strava-dashboard.component";
import { BifurcationLogisticalPage } from "./pages/recursion/bifurcation-logistical.page";
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
import { MCEDOEGSAPage } from "./pages/neurochemistry/mc-edoegsa.page";
import { ZonesOfRegulationPage } from "./pages/neurochemistry/zones-of-regulation.page";
import { SelfLoveNotNarcissismPage } from "./pages/neurochemistry/self-love-not-narcissism.page";
import { TheRelaxationResponsePage } from "./pages/neurochemistry/the-relaxation-response.page";
import { NeurochemistryLandingPage } from "./pages/neurochemistry/landing.page";
import { SubconsciousPositiveReactionsPage } from "./pages/neurochemistry/subconscious-positive-reactions.page";
import { SelfActualisationPeakExperiencesPage } from "./pages/neurochemistry/self-actualisation.page";
import { LearningAndGeneticCodePage } from "./pages/neurochemistry/learning-and-genetic-code.page";
import { LetItGoPage } from "./pages/neurochemistry/let-it-go.page";
import { AdviceFromTheBeatlesPage } from "./pages/neurochemistry/advice-from-the-beatles.page";
import { NeurochemistryReferencesPage } from "./pages/neurochemistry/references.page";
import { RobRendellFooterComponent } from "./components/rob-rendell-footer.component";
import { SharedRoutes } from "./common/shared-routes";
import { SimpleEquationsInfiniteComplexity } from "./pages/recursion/simple-equations.page";
import { MelatoninIsTheKeyToCreativeInsight } from "./pages/neurochemistry/melatonin-key-to-creativity.page";
import { NeurochemistryConclusionPage } from "./pages/neurochemistry/conclusion.page";
import { GuiltAndForgiveness } from "./pages/neurochemistry/guilt-and-forgiveness.page";
import { AttachmentAndSharing } from "./pages/neurochemistry/attachment-and-sharing.page";
import { RecursionLandingPage } from "./pages/recursion/landing.page";
import { DimensionsPage } from "./pages/recursion/dimensions.page";
import { RecursionAndFractalsPage } from "./pages/recursion/recursion-and-fractals.page";
import { Compass } from "react-bootstrap-icons";
import { IsImaginationASensePage } from "./pages/recursion/is-imagination-a-sense.page";
import { BiomagnetismLandingPage } from "./pages/biomagnetism/landing.page";
import { MigratingBirdsPage } from "./pages/biomagnetism/migrating-birds.page";
import { BiomagnetismReferencesPage } from "./pages/biomagnetism/references.page";
import { BiomagnetismInTheOceanPage } from "./pages/biomagnetism/biomagnetism-in-the-ocean.page";
import { MagnetismInHydroElectricPowerPage } from "./pages/biomagnetism/hydro-electric-power.page";
import { HumanToHumanAttractionPage } from "./pages/biomagnetism/human-to-human-attraction.page";
import { WhatAreVibesPage } from "./pages/biomagnetism/what-are-vibes.page";
import { MagneticFieldOnEarthPage } from "./pages/biomagnetism/magnetic-field-on-earth.page";
import { BiomagnetismInHumanEndocrineSystemPage } from "./pages/biomagnetism/human-endocrine-system.page";
import { FerroParaDiaMagnetismPage } from "./pages/biomagnetism/ferro-para-diag-magnetism.page";
import { VeritasiumHumanCompassPage } from "./pages/biomagnetism/veritasium-human-compass.page";
import { IsBloodMagneticPage } from "./pages/biomagnetism/is-blood-magnetic.page";
import { ElectromagneticPulsesPage } from "./pages/biomagnetism/emp.page";
import { OperationsDashboardPage } from "./operations/dashboard.page";
import { ScotchWhiskyPage } from "./pages/misc/scotch-whisky.page";

const maintenanceMode = false;

ReactDOM.render(
  <React.StrictMode>
    {maintenanceMode ? (
      <>
        <div style={{ color: "white", background: "black" }}>
          ... Be back soon! <Compass />
        </div>
      </>
    ) : (
      <div>
        <BrowserRouter>
          <App />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/operations" element={<OperationsDashboardPage />} />

            {/* //////////////////////////////////// */}
            <Route path="sudoku" element={<SudokuDashboardComponent />} />
            <Route path="sudoku/play" element={<SudokuGameComponent />} />
            <Route path="sudoku/play/:sudokuId" element={<PlaySudoku />} />

            {/* //////////////////////////////////// */}
            <Route
              path={SharedRoutes.Recursion.LandingPage}
              element={<RecursionLandingPage />}
            />
            <Route
              path={SharedRoutes.Recursion.RecursionAndFractals}
              element={<RecursionAndFractalsPage />}
            />
            <Route
              path={SharedRoutes.Recursion.BifurcationLogisticalMap}
              element={<BifurcationLogisticalPage />}
            />
            <Route
              path={SharedRoutes.Recursion.SimpleEquations}
              element={<SimpleEquationsInfiniteComplexity />}
            />
            <Route
              path={SharedRoutes.Recursion.Dimensions}
              element={<DimensionsPage />}
            />
            <Route
              path={SharedRoutes.Recursion.IsImaginationASense}
              element={<IsImaginationASensePage />}
            />

            {/* //////////////////////////////////// */}
            <Route
              path="climate-change"
              element={<ClimateChangeLandingPage />}
            />
            <Route
              path={SharedRoutes.ClimateChange.Ruminants}
              element={<RuminantsPage />}
            />
            <Route
              path="climate-change/ocean-acidification"
              element={<OceanAcidification />}
            />
            <Route
              path="climate-change/ride-a-bike"
              element={<RideABikePage />}
            />
            <Route
              path="climate-change/renewable-energy"
              element={<RenewableEnergyPage />}
            />
            <Route
              path="climate-change/reduce-reuse-recycle"
              element={<ReduceReuseRecyclePage />}
            />

            {/* //////////////////////////////////// */}
            <Route
              path="neurochemistry/"
              element={<NeurochemistryLandingPage />}
            />
            <Route
              path="neurochemistry/happiness"
              element={<MCEDOEGSAPage />}
            />
            <Route
              path="neurochemistry/zones-of-regulation"
              element={<ZonesOfRegulationPage />}
            />
            <Route
              path="neurochemistry/self-love-not-narcissism"
              element={<SelfLoveNotNarcissismPage />}
            />
            <Route
              path="neurochemistry/the-relaxation-response"
              element={<TheRelaxationResponsePage />}
            />
            <Route
              path="neurochemistry/subconscious-positive-reactions"
              element={<SubconsciousPositiveReactionsPage />}
            />
            <Route
              path="neurochemistry/self-actualisation-peak-experiences"
              element={<SelfActualisationPeakExperiencesPage />}
            />
            <Route
              path="neurochemistry/learning-and-genetic-code"
              element={<LearningAndGeneticCodePage />}
            />
            <Route path="neurochemistry/let-it-go" element={<LetItGoPage />} />
            <Route
              path="neurochemistry/advice-from-the-beatles"
              element={<AdviceFromTheBeatlesPage />}
            />
            <Route
              path="neurochemistry/melatonin-is-the-key-to-creative-insight"
              element={<MelatoninIsTheKeyToCreativeInsight />}
            />
            <Route
              path="neurochemistry/guilt-and-forgiveness"
              element={<GuiltAndForgiveness />}
            />
            <Route
              path="neurochemistry/attachment-and-sharing"
              element={<AttachmentAndSharing />}
            />
            <Route
              path="neurochemistry/conclusion"
              element={<NeurochemistryConclusionPage />}
            />
            <Route
              path="neurochemistry/references"
              element={<NeurochemistryReferencesPage />}
            />
            {/* //////////////////////////////////// */}
            <Route
              path={SharedRoutes.Biomagnetism.LandingPage}
              element={<BiomagnetismLandingPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.MigratingBirds}
              element={<MigratingBirdsPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.BiomagnetismInTheOcean}
              element={<BiomagnetismInTheOceanPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.MagnetismInHydroElectricPower}
              element={<MagnetismInHydroElectricPowerPage />}
            />
            <Route
              path={
                SharedRoutes.Biomagnetism
                  .FerromagnetismParamagnetismDiamagnetism
              }
              element={<FerroParaDiaMagnetismPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.MagneticFieldOnEarth}
              element={<MagneticFieldOnEarthPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.HumanToHumanAttraction}
              element={<HumanToHumanAttractionPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.WhatAreVibes}
              element={<WhatAreVibesPage />}
            />
            <Route
              path={
                SharedRoutes.Biomagnetism.MagnetismInTheHumanEndocrineSystem
              }
              element={<BiomagnetismInHumanEndocrineSystemPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.VeritasiumHumanCompass}
              element={<VeritasiumHumanCompassPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.IsBloodMagnetic}
              element={<IsBloodMagneticPage />}
            />
            <Route
              path={SharedRoutes.Biomagnetism.ElectromagneticPulses}
              element={<ElectromagneticPulsesPage />}
            />
            <Route
              path="biomagnetism/references"
              element={<BiomagnetismReferencesPage />}
            />
            {/* //////////////////////////////////// */}
            <Route path="miscellaneous/india" element={<IndiaPage />} />
            <Route path="miscellaneous/scotch-whisky" element={<ScotchWhiskyPage />} />
            <Route
              path="miscellaneous/giant-pacific-octopus"
              element={<GiantPacificOctopusPage />}
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
            <Route path="strava-api" element={<StravaDashboardComponent />} />
          </Routes>
          <RobRendellFooterComponent />
        </BrowserRouter>
      </div>
    )}
  </React.StrictMode>,
  document.getElementById("root")
);

function PlaySudoku() {
  const { sudokuId } = useParams();
  return <SudokuGameComponent sudokuId={sudokuId} />;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
