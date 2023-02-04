import { MutableRefObject, useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../../config";
import {
  ExtendedSubmitSudokuResponse,
  SubmissionId,
  SudokuId,
  SudokuValidationIssue,
} from "robrendellwebsite-common";
import PostSubmissionRequest from "robrendellwebsite-common/src/contract/sudoku/request/submission.post";
import { SudokuGrid } from "../types/sudoku-grid";

type Props = {
  submitting: boolean;
  sudokuGrid?: MutableRefObject<SudokuGrid | undefined>;
  sudokuId: SudokuId;
  submissionId: SubmissionId;
  submitterName: string;
  onComplete: (timeTakenMs: number) => void;
  onInvalid: (validationIssues: SudokuValidationIssue[]) => void;
  onValid: () => void;
};

/**
 * API call to POST /sudoku/submit
 * Request:
 * - sudokuId: SudokuId,
 * - sudokuSubmission: string,
 * - sudokuSubmissionId: SubmissionId,
 *
 * Response:
 * - errorMessage: string
 * - complete: boolean
 * - valid: boolean
 */
export const useSubmitSudoku = (props: Props) => {
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    if (props.submitting && props.sudokuId && props.sudokuGrid) {
      const data: PostSubmissionRequest = {
        dateSubmitted: "--- tackled by back end now",
        sudokuId: props.sudokuId,
        sudokuSubmission: JSON.stringify(props.sudokuGrid.current),
        sudokuSubmissionId: props.submissionId,
        timeTaken: 0,
        submitterName: props.submitterName,
      };
      axios
        .post<ExtendedSubmitSudokuResponse>(`${config.backend}/sudoku/submit`, {
          headers: { "Content-Type": "application/json" },
          ...data,
        })
        .then((response) => {
          if (response.data.valid && response.data.complete) {
            setCompleted(true);
            props.onComplete(response.data.timeTakenMs ?? 0);
          } else if (response.data.valid) {
            props.onValid();
          } else if (!response.data.valid) {
            props.onInvalid(response.data.validationIssues);
          }
        });
    }
  }, [props.submitting]);
  return { completed };
};
