import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { InfinitySpinnerComponent } from "../../../../components/infinity-spinner.component";
import { config } from "../../../../config";
import axios from "axios";

type SudokuRecord = {
  sudokuId: string;
  difficulty: string;
  dateGenerated: string;
  puzzle: string;
  solution: string;
};

export function RecentSudokusComponent() {
  const [recentSudokus, setRecentSudokus] = useState<SudokuRecord[]>([]);
  useEffect(() => {
    loadSudokus();
  }, []);
  function loadSudokus() {
    axios
      .post(`${config.backend}/sudoku/list`, {
        headers: { "Content-Type": "application/json" },
        filters: {
          dateGenerated: {
            days: 30,
          },
        },
        pagination: {
          limit: 10,
        },
      })
      .then((response) => {
        setRecentSudokus(response.data);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }
  function renderRecentSudokuRows() {
    return recentSudokus.map((recentSudoku, i) => {
      return (
        <tr key={recentSudoku.sudokuId}>
          <td>{recentSudoku.sudokuId}</td>
          <td>{recentSudoku.difficulty}</td>
          <td>{new Date(recentSudoku.dateGenerated).toDateString()}</td>
          <td>
            <a
              href={`/sudoku/play/${recentSudoku.sudokuId}`}
              target="_blank"
              rel="noreferrer"
            >
              Play!
            </a>
          </td>
        </tr>
      );
    });
  }
  return (
    <>
      <h2>Play Sudoku</h2>
      {recentSudokus.length > 0 && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Difficulty</th>
              <th>Generated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderRecentSudokuRows()}</tbody>
        </Table>
      )}
      {recentSudokus.length === 0 && <InfinitySpinnerComponent />}
    </>
  );
}
