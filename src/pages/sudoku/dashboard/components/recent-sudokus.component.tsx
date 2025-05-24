import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { InfinitySpinnerComponent } from "../../../../components/infinity-spinner.component";

type SudokuRecord = {
  dateGenerated: string;
  puzzle: string;
  solution: string;
};

export function RecentSudokusComponent() {
  const [recentSudokus, setRecentSudokus] = useState<SudokuRecord[]>([]);
  function renderRecentSudokuRows() {
    return recentSudokus.map((recentSudoku, i) => {
      return (
        <tr key={i}>
          <td></td>
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
