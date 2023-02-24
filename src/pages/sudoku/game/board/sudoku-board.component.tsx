import React from "react";
import { SudokuValidationIssue } from "robrendellwebsite-common";
import { SudokuGrid } from "../../types/sudoku-grid";
import {
  KeyDownInCellFn,
  SudokuCellComponent,
} from "../cell/sudoku-cell.component";

type Props = {
  sudokuBoard: SudokuGrid;
  disabled: boolean;
  validationIssues?: SudokuValidationIssue[];
  cellKeyDownFn: KeyDownInCellFn;
  notesMode: boolean;
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
                disabled={props.disabled}
                invalid={Boolean(
                  props.validationIssues?.find(
                    (issue) =>
                      issue.row === rowIndex && issue.col === columnIndex
                  )
                )}
                keyDownFn={props.cellKeyDownFn}
                notesMode={props.notesMode}
              />
            );
          })}
        </tr>
      );
    }
  );
  return <>{board}</>;
}
