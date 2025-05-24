import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { config } from "../../../../config";

export function SudokuGenerationComponent() {
  const [checkGenerationLoop, setCheckGenerationLoop] = useState();
  const [generationJobId, setGenerationJobId] = useState<string>("");
  const [generationDifficulty, setGenerationDifficulty] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  console.log("rendered generation component");

  function setSudokuResult(difficulty: string) {
    //
  }

  function watchSudokuGeneration() {
    //
  }

  function generateSudoku(difficulty: string) {
    // this.toggleGenerating(true);
    console.log("generating sudoku " + difficulty);
    axios
      .post(`${config.backend}/sudoku/add`, {
        headers: { "Content-Type": "application/json" },
        roberto: "testing",
        difficulty,
        generatorUserName: "",
      })
      .then((response) => {
        const generationJobId = response.data["generationJobId"];
        if (!generationJobId) {
          console.error("There was a problem getting the generationJobId");
          return;
        }
        if (checkGenerationLoop) {
          console.error("Already checking for a generation...");
          return;
        }
        watchSudokuGeneration();
        console.log("Job Id: " + generationJobId);
        setGenerationJobId(generationJobId);
        setGenerationDifficulty(difficulty);
        setSudokuResult(`Generating ${difficulty} sudoku...`);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }
  return (
    <>
      <h2>Generate Sudoku</h2>
      <div id="difficulty-button-panel-parent">
        <div id="difficulty-button-panel">
          <Button
            id={SudokuGenerationButton.Easy}
            onClick={() => generateSudoku("easy")}
          >
            Easy
          </Button>
          <Button
            id={SudokuGenerationButton.Medium}
            onClick={() => generateSudoku("medium")}
          >
            Medium
          </Button>
          <Button
            id={SudokuGenerationButton.Hard}
            onClick={() => generateSudoku("hard")}
          >
            Hard
          </Button>
        </div>
        <div id={SudokuDashboardComponentDiv.SudokuGenerationResultsContainer}>
          {/* {isGenerating && <img src={InfinitySpinner} />} */}
          <div id={SudokuDashboardComponentDiv.SudokuGenerationResults}></div>
        </div>
      </div>
    </>
  );
}

const SudokuDashboardComponentDiv = {
  SudokuGenerationResultsContainer: "sudoku-gen-results-container",
  SudokuGenerationResults: "sudoku-gen-results",
};

const SudokuGenerationButton = {
  Easy: "btnEasy",
  Medium: "btnMedium",
  Hard: "btnHard",
  VeryHard: "btnVeryHard",
};
