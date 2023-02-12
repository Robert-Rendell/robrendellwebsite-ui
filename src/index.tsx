import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import App from "./app/App.component";
import { HomePage } from "./pages/home/home.page";
import SudokuDashboardComponent from "./pages/sudoku/dashboard/sudoku-dashboard.component";
import { SudokuGameComponent } from "./pages/sudoku/game/sudoku-game.component";
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
import { WordOfTheDayPage } from "./pages/misc/word-of-the-day.page";
import { InterestingDatesInHistoryPage } from "./pages/misc/interesting-dates-in-history.page";
import { ImportanceOfStretchingPage } from "./pages/neurochemistry/importance-of-stretching.page";
import { ColdShowersPage } from "./pages/neurochemistry/cold-showers.page";
import { ExercisePage } from "./pages/neurochemistry/exercise.page";
import { VitaminDIsAHormonePage } from "./pages/neurochemistry/vitamin-d-is-a-hormone.page";
import { ImaginationAndVisualisationPage } from "./pages/neurochemistry/imagination-and-visualisation.page";
import { PhilosophyPage } from "./pages/misc/philosophy.page";
import { NobelPrizePage } from "./pages/misc/nobel-prize.page";

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
              path={SharedRoutes.Neurochemistry.LandingPage}
              element={<NeurochemistryLandingPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.McEdoegsa}
              element={<MCEDOEGSAPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.ZonesOfRegulation}
              element={<ZonesOfRegulationPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.SelfLove}
              element={<SelfLoveNotNarcissismPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.RelaxationResponse}
              element={<TheRelaxationResponsePage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.SubconsciousPositiveReactions}
              element={<SubconsciousPositiveReactionsPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.SelfActualisation}
              element={<SelfActualisationPeakExperiencesPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.LearningAndGeneticCode}
              element={<LearningAndGeneticCodePage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.LetItBe}
              element={<LetItGoPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.AdviceFromTheBeatles}
              element={<AdviceFromTheBeatlesPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.MelatoninIsTheKeyToCreativity}
              element={<MelatoninIsTheKeyToCreativeInsight />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.VitaminD}
              element={<VitaminDIsAHormonePage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.ImportanceOfStretching}
              element={<ImportanceOfStretchingPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.Exercise}
              element={<ExercisePage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.ColdShowers}
              element={<ColdShowersPage />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.GuiltAndForgiveness}
              element={<GuiltAndForgiveness />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.AttachmentAndSharing}
              element={<AttachmentAndSharing />}
            />
            <Route
              path={SharedRoutes.Neurochemistry.ImaginationAndVisualisation}
              element={<ImaginationAndVisualisationPage />}
            />
            <Route
              path={
                SharedRoutes.Neurochemistry.PropheciesAndMassAwakeningDiscussion
              }
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
