/* eslint-disable indent */
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
import { SudokuValidationIssue } from "robrendellwebsite-common";
import { KeyDownInCellFn } from "./cell/sudoku-cell.component";
import { Check, X, Pen, PenFill } from "react-bootstrap-icons";
import { FullScreenToggleComponent } from "../../../components/full-screen-toggle.component";
import { RobBackButton } from "../../../components/back-button.component";
import { usePreferences } from "../../../hooks/use-preferences.hook";

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
  const { preferences, savePreferences } = usePreferences();
  const sudokuGrid = useRef<SudokuGrid | undefined>();
  const validationMessage = useRef<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [notesMode, setNotesMode] = useState<boolean>(false);
  const [validationIssues, setValidationIssues] = useState<
    SudokuValidationIssue[]
  >([]);
  const keyDownInCell: KeyDownInCellFn = (
    key: string,
    row: number,
    col: number
  ) => {
    const localValidationIssues = validationIssues.filter(
      (issue) => !(issue.row === row && issue.col === col)
    );
    if (localValidationIssues.length === 0) validationMessage.current = "";
    if (key === "p" || key === "_" || key === "-") {
      setNotesMode(!notesMode);
    }
    setValidationIssues(localValidationIssues);
  };
  const [submitterName, setSubmitterName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { sudokuBoard, submissionId, sudokuId, sudokuError } = useGetSudoku(
    props.sudokuId
  );
  const { completed } = useSubmitSudoku({
    submissionId,
    submitterName,
    sudokuGrid,
    sudokuId,
    onComplete: (timeTakenMs: number) => {
      validationMessage.current = "";
      toggleControls(false);
      alert(
        `Sudoku was completed in ${convertMsToMinsSecs(
          timeTakenMs
        )}! Well done ${submitterName}!!`
      );
    },
    onInvalid: (validationIssues: SudokuValidationIssue[]) => {
      validationMessage.current = "Sudoku is wrong!";
      toggleControls(true);
      setSubmitting(false);
      setValidationIssues(validationIssues);
    },
    onValid: () => {
      validationMessage.current = "Sudoku is valid! Keep going!";
      toggleControls(true);
      setSubmitting(false);
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
    setValidationIssues([]);
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
      const submitterName =
        prompt(promptMessage, preferences?.sudoku?.submitterName) || "";
      setSubmitterName(submitterName);
      savePreferences({ sudoku: { submitterName } });
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
                {sudokuError && <h2>Error loading sudoku</h2>}
                {!sudokuError && <img src={InfinitySpinner} />}
              </div>
            ) : (
              <>
                <div id="sudoku-top-buttons" style={{ marginBottom: "4px" }}>
                  <RobBackButton backTwo areYouSureDialog={!completed} />
                  <FullScreenToggleComponent
                    path={window.location.pathname
                      .split("/")
                      .slice(0, -1)
                      .join("/")}
                  />
                  <Button
                    id="notes-mode-button"
                    className={notesMode ? "notes-mode-button-enabled" : ""}
                    onClick={() => setNotesMode(!notesMode)}
                    title="Press 'p' in a cell to toggle pen mode"
                  >
                    {notesMode ? <Pen /> : <PenFill />}
                  </Button>
                </div>
                <Table striped bordered>
                  <tbody id={SudokuGameComponents.Div.SudokuBoard}>
                    <SudokuBoardComponent
                      validationIssues={validationIssues}
                      sudokuBoard={sudokuBoard}
                      disabled={disabled}
                      cellKeyDownFn={keyDownInCell}
                      notesMode={notesMode}
                    />
                  </tbody>
                </Table>
                <Button
                  id={SudokuGameComponents.Button.Validate}
                  onClick={onValidateClick}
                >
                  {!completed && submitting && (
                    <>
                      <span>Checking...</span>
                      <img src={InfinitySpinner} width="30px" />
                    </>
                  )}
                  {!completed && !submitting && "Check / Validate"}
                  {completed && <span>Finished!</span>}
                </Button>
                <span>
                  {validationMessage.current.includes("valid") && (
                    <Check color="green" size="30" />
                  )}
                  {validationMessage.current.length > 0 &&
                    !validationMessage.current.includes("valid") && (
                      <X color="red" size="30" />
                    )}
                  {validationMessage.current}
                </span>
              </>
            )}
          </div>
        </div>
        <SudokuLeaderboardComponent leaderboard={leaderboard} />
      </div>
    </div>
  );
}
