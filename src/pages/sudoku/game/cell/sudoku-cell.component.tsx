import React from "react";
import "./sudoku-cell.component.css";

type Props = {
  cell: number | string;
  row: number;
  column: number;
};

export function SudokuCellComponent(props: Props) {
  function createSudokuInputName(row: number, col: number) {
    return `(${row}, ${col})`;
  }
  function createSudokuInputId(inputName: string, row: number, col: number) {
    return `${inputName}${createSudokuInputName(row, col)}`;
  }
  function keyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      document.getElementById(getId())?.blur();
    }
  }
  function getCellValue() {
    return parseInt(`${props.cell}`) > 0 ? props.cell : "";
  }

  function getId() {
    return createSudokuInputId("sudoku-input", props.row, props.column);
  }

  return (
    <td>
      <input
        id={getId()}
        name={createSudokuInputName(props.row, props.column)}
        type="number"
        defaultValue={getCellValue()}
        className="sudoku-input"
        onKeyDown={keyDown}
        disabled={getCellValue() ? true : false}
      />
    </td>
  );
}
