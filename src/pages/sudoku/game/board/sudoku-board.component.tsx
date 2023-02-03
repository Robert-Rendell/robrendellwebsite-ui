import React from "react";
import { SudokuGrid } from "../../types/sudoku-grid";
import { SudokuCellComponent } from "../cell/sudoku-cell.component";

type Props = {
  sudokuBoard: SudokuGrid;
};

export function SudokuBoardComponent(props: Props) {
  const board = props.sudokuBoard.map(
    (sudokuRow: number[], rowIndex: number) => {
      return (
        <tr key={`row(${rowIndex})`}>
          {sudokuRow.map((cell: number, columnIndex: number) => {
            return (
              <SudokuCellComponent
                key={`cell(${rowIndex},${columnIndex})`}
                cell={cell}
                row={rowIndex}
                column={columnIndex}
              />
            );
          })}
        </tr>
      );
    }
  );
  return <>{board}</>;
}
