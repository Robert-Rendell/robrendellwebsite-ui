import React from "react";
import { SudokuGenerationComponent } from "./components/generation.component";
import { RecentSudokusComponent } from "./components/recent-sudokus.component";
import { PinnedSudokusComponent } from "./components/pinned-sudokus.component";
import "./sudoku-dashboard.component.css";

export function SudokuDashboardComponent() {
  return (
    <>
      <div id="sudoku-dashboard">
        <h1>Sudoku!</h1>
        <hr />
        <SudokuGenerationComponent />
        <hr />
        <RecentSudokusComponent />
        <hr />

        <PinnedSudokusComponent />
      </div>
    </>
  );
}
