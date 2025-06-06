import axios from "axios";
import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { config } from "../../../../config";
import { InfinitySpinnerComponent } from "../../../../components/infinity-spinner.component";

export function SudokuGenerationComponent() {
  const [checkGenerationLoop, setCheckGenerationLoop] = useState<any>();
  const [generationJobId, setGenerationJobId] = useState<string>("");
  const [generationDifficulty, setGenerationDifficulty] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const retries = useRef<number>(0);

  console.log("rendered generation component");

  function setSudokuResult(difficulty: string) {
    //
  }

  function checkSudokuGeneration() {
    console.log(
      `Checking sudoku generation (retry: ${retries.current}) for jobId: ${generationJobId}`
    );
    axios
      .post(`${config.backend}/sudoku/list`, {
        headers: { "Content-Type": "application/json" },
        filters: {
          generatorJobId: generationJobId,
        },
        generatorUserName: "implement on front end",
      })
      .then((response) => {
        if (response.data?.length > 0) {
          const sudokuId = response.data[0]["sudokuId"];
          console.log("Sudoku generated" + sudokuId);
        } else {
          if (retries.current < 2) {
            retries.current = retries.current + 1;
            watchSudokuGeneration();
            console.log(
              `Retry ${retries}: Generating ${generationDifficulty} sudoku... AWS Lambda cold starts increase the generation time.`
            );
          } else {
            console.log(
              "Sudoku generation timed out. AWS Lambda execution time limit reached. Creating another request."
            );
            retries.current = 0;
            setGenerationJobId("");
            setIsGenerating(false);
            enableGenerationButtons();
            setCheckGenerationLoop(null);
            // Kick off another generation
            generateSudoku(generationDifficulty);
          }
        }
      })
      .catch((reason) => {
        setIsGenerating(false);
        console.error(reason);
      });
    clearTimeout(checkGenerationLoop);
  }

  function watchSudokuGeneration() {
    console.log("Watch sudoku generation 10 seconds");
    const interval = setInterval(checkSudokuGeneration, 10000);
    setCheckGenerationLoop(interval);
  }

  function disableGenerationButtons() {
    (document.getElementById(SudokuGenerationButton.Easy) as any).disabled =
      true;
    (document.getElementById(SudokuGenerationButton.Medium) as any).disabled =
      true;
    (document.getElementById(SudokuGenerationButton.Hard) as any).disabled =
      true;
  }

  function enableGenerationButtons() {
    (document.getElementById(SudokuGenerationButton.Easy) as any).disabled =
      false;
    (document.getElementById(SudokuGenerationButton.Medium) as any).disabled =
      false;
    (document.getElementById(SudokuGenerationButton.Hard) as any).disabled =
      false;
  }

  function generateSudoku(difficulty: string) {
    disableGenerationButtons();
    setIsGenerating(true);
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
          {isGenerating && <InfinitySpinnerComponent />}
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
