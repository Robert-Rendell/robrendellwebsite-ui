import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { SudokuCellComponent } from "./cell/sudoku-cell.component";
import "./sudoku-game.component.css";
import { SudokuLeaderboardComponent } from "./leaderboard/sudoku-leaderboard.component";
import { useConvertMsToMinsSecs } from "../hooks/useConvertMsToMinSecs.hook";
import { useGetSudoku } from "../hooks/useGetSudoku.hook";
import { useGetSudokuLeaderboard } from "../hooks/useGetSudokuLeaderboard.hook";
import InfinitySpinner from "../../../resources/infinity-spinner.svg";
import { useSubmitSudoku } from "../hooks/useSubmitSudoku.hook";
import { SudokuGrid } from "../types/sudoku-grid";
import { SudokuBoardComponent } from "./board/sudoku-board.component";

const SudokuGameComponents = {
  Div: {
    SudokuBoard: "render-sudoku-board",
  },

  Button: {
    Validate: "btnValidate",
  },
};

type Props = {
  sudokuId?: string;
};
export function SudokuGameComponent(props: Props) {
  const [sudokuGrid, setSudokuGrid] = useState<SudokuGrid>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { puzzle, sudokuBoard, submissionId, sudokuId } = useGetSudoku(
    props.sudokuId
  );
  const [submitterName, setSubmitterName] = useState("");
  const { completed } = useSubmitSudoku({
    submissionId,
    submitterName,
    sudokuGrid,
    sudokuId,
    onComplete: (timeTakenMs: number) => {
      toggleControls(false);
      alert(
        `Sudoku was completed in ${convertMsToMinsSecs(
          timeTakenMs
        )}! Well done ${submitterName}!!`
      );
    },
    onInvalid: () => {
      toggleControls(true);
      setSubmitting(false);
      alert("Something is wrong!");
    },
    onValid: () => {
      toggleControls(true);
      setSubmitting(false);
      alert("Sudoku is valid! Keep going!");
    },
    submitting,
  });
  const leaderboard = useGetSudokuLeaderboard(props.sudokuId, completed);
  const convertMsToMinsSecs = useConvertMsToMinsSecs();
  const onValidateClick = () => {
    readSudokuGrid();
    toggleControls(false);
    if (isSubmissionComplete() && !submitterName) {
      getSubmitterName();
    }
    setSubmitting(true);
  };

  function readSudokuGrid() {
    const grid = [];
    for (let row = 0; row < 9; row++) {
      const rowCells: number[] = [];
      grid.push(rowCells);
      for (let col = 0; col < 9; col++) {
        const v = (
          document.getElementById(
            `sudoku-input(${row}, ${col})`
          ) as HTMLInputElement
        ).value;
        rowCells.push(v ? parseInt(v) : 0);
      }
    }
    setSudokuGrid(grid);
  }

  function isSubmissionComplete() {
    return !JSON.stringify(sudokuGrid).includes("0");
  }

  function getSubmitterName() {
    if (submitterName.length === 0) {
      const submitterName = prompt("Enter your name or leave blank");
      setSubmitterName(submitterName || "");
    }
  }

  function toggleControls(enabled: boolean) {
    const board = document.getElementById(
      SudokuGameComponents.Div.SudokuBoard
    ) as any;
    board.disabled = !enabled;
    const btnValidate = document.getElementById(
      SudokuGameComponents.Button.Validate
    ) as any;
    btnValidate.disabled = !enabled;
  }

  useEffect(() => {
    if (sudokuId) {
      readSudokuGrid();
    }
  }, [sudokuId]);

  return (
    <div id="sudoku-game">
      <div id="sudoku-game-inner" className="row">
        <div id="board-parent" className="col left-right-padding-5">
          <div id="board" className="sudoku-parent">
            {typeof sudokuBoard === "undefined" ? (
              <div className="centred">
                <img src={InfinitySpinner} />
              </div>
            ) : (
              <>
                <Table striped bordered hover>
                  <tbody id={SudokuGameComponents.Div.SudokuBoard}>
                    <SudokuBoardComponent sudokuBoard={sudokuBoard} />
                  </tbody>
                </Table>
                <Button
                  id={SudokuGameComponents.Button.Validate}
                  onClick={onValidateClick}
                >
                  Check / Validate
                </Button>
              </>
            )}
          </div>
        </div>
        <SudokuLeaderboardComponent leaderboard={leaderboard} />
      </div>
    </div>
  );
}
