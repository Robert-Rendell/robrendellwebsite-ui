import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../../../config";
import { SudokuResponse } from "robrendellwebsite-common";

/**
 * Response:
 * - sudokuId: SudokuId
 * - puzzle: number[][] | undefined,
 * - submissionId: SubmissionId,
 */
export function useGetSudoku(id?: string) {
  const [puzzle, setPuzzle] = useState("");
  const [sudokuBoard, setSudokuBoard] = useState<number[][] | undefined>();
  const [submissionId, setSubmissionId] = useState("");
  const [sudokuId, setSudokuId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response = await axios.get<SudokuResponse>(
          `${config.backend}/sudoku/play/${id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const sudoku = response.data.puzzle;
        const submissionId = response.data.submissionId;
        const sudokuId = response.data.sudokuId;
        setPuzzle(JSON.stringify(sudoku));
        setSudokuBoard(sudoku);
        setSubmissionId(submissionId);
        setSudokuId(sudokuId);
      }
    };
    fetchData();
  }, [id]);

  return { puzzle, sudokuBoard, submissionId, sudokuId };
}
