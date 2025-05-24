import React from "react";
import { Table } from "react-bootstrap";

export function PinnedSudokusComponent() {
  return (
    <>
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
    </>
  );
}
