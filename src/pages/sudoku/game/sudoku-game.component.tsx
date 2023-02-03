import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { SudokuLeaderboardComponent } from "./leaderboard/sudoku-leaderboard.component";
import { useConvertMsToMinsSecs } from "../hooks/useConvertMsToMinSecs.hook";
import { useGetSudoku } from "../hooks/useGetSudoku.hook";
import { useGetSudokuLeaderboard } from "../hooks/useGetSudokuLeaderboard.hook";
import InfinitySpinner from "../../../resources/infinity-spinner.svg";
import { useSubmitSudoku } from "../hooks/useSubmitSudoku.hook";
import { SudokuGrid } from "../types/sudoku-grid";
import { SudokuBoardComponent } from "./board/sudoku-board.component";
import "./sudoku-game.component.css";

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
  const sudokuGrid = useRef<SudokuGrid | undefined>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitterName, setSubmitterName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { sudokuBoard, submissionId, sudokuId } = useGetSudoku(props.sudokuId);
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
      alert("Sudoku is wrong!");
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
  useEffect(() => {
    if (sudokuId) {
      readSudokuGrid();
    }
  }, [sudokuId]);

  const onValidateClick = () => {
    readSudokuGrid();
    toggleControls(false);
    if (isSubmissionComplete() && submitterName.length === 0) {
      getSubmitterName(
        "Looks like you are done - let me do a final check!\n\nEnter your name or leave it blank..."
      );
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
    sudokuGrid.current = grid;
  }

  function isSubmissionComplete() {
    return !JSON.stringify(sudokuGrid).includes("0");
  }

  function getSubmitterName(promptMessage: string) {
    if (submitterName.length === 0) {
      const submitterName = prompt(promptMessage);
      setSubmitterName(submitterName || "");
    }
  }

  function toggleControls(enabled: boolean) {
    setDisabled(!enabled);
    const btnValidate = document.getElementById(
      SudokuGameComponents.Button.Validate
    ) as HTMLButtonElement;
    btnValidate.disabled = !enabled;
  }

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
                    <SudokuBoardComponent
                      sudokuBoard={sudokuBoard}
                      disabled={disabled}
                    />
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
