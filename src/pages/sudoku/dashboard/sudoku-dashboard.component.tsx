import React from "react";
import { Button, Table } from "react-bootstrap";
// import InfinitySpinner from "../../../resources/infinity-spinner.svg";
import SudokuDesigns from "../../../resources/designs/sudoku-generation.svg";
import "./sudoku-dashboard.component.css";

SudokuDashboardComponent.Div = {
  SudokuGenerationResultsContainer: "sudoku-gen-results-container",
  SudokuGenerationResults: "sudoku-gen-results",
};

SudokuDashboardComponent.Button = {
  Easy: "btnEasy",
  Medium: "btnMedium",
  Hard: "btnHard",
  VeryHard: "btnVeryHard",
};


export function SudokuDashboardComponent() {
  return (
    <>
      <div id="sudoku-dashboard">
        <h1>Sudoku!</h1>
        <hr />
        <h2>Generate Sudoku</h2>
        <div id="difficulty-button-panel-parent">
          <div id="difficulty-button-panel">
            <Button
              id={SudokuDashboardComponent.Button.Easy}

            >
              Easy
            </Button>
            <Button
              id={SudokuDashboardComponent.Button.Medium}
            >
              Medium
            </Button>
            <Button
              id={SudokuDashboardComponent.Button.Hard}
            >
              Hard
            </Button>
          </div>
          <div
            id={SudokuDashboardComponent.Div.SudokuGenerationResultsContainer}
          >
            {/* {isGenerating && <img src={InfinitySpinner} />} */}
            <div
              id={SudokuDashboardComponent.Div.SudokuGenerationResults}
            ></div>
          </div>
        </div>
        <hr />
        <h2>Play Sudoku</h2>
        {/* {recentSudokus.length > 0 && (
          <Table striped bordered hover variant="dark" maxWidth={1000}>
            <thead>
              <tr>
                <th>#</th>
                <th>Difficulty</th>
                <th>Generated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{recentSudokus}</tbody>
          </Table>
        )} */}
        {/* {recentSudokus.length === 0 && <InfinitySpinnerComponent />} */}
        <hr />
        <h2>Designs</h2>
        <img src={SudokuDesigns} width="100%" style={{ maxWidth: 1000 }} />
        <hr />
        <h2>Pinned Sudokus: for those who are competitive!</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Rob&apos;s time</th>
              <th>Difficulty</th>
              <th>Play link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10min 15secs</td>
              <td>Hard</td>
              <td>
                <a
                  href="/sudoku/play/13e44bd2-047a-4cf0-802a-3efd8ba819ed"
                  target="_blank"
                  rel="noreferrer"
                >
                  Play!
                </a>
              </td>
            </tr>
            <tr>
              <td>3min 47secs</td>
              <td>Easy/Medium</td>
              <td>
                <a
                  href="/sudoku/play/27bbf55e-414c-4b9e-808d-4a5e6181d26a"
                  target="_blank"
                  rel="noreferrer"
                >
                  Play!
                </a>
              </td>
            </tr>
            <tr>
              <td>10min 2secs</td>
              <td>Hard</td>
              <td>
                <a
                  href="/sudoku/play/2f1f6c5e-c7d2-402a-9975-04cbf0f39de4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Play!
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
        <hr />
      </div>
    </>
  );
}
