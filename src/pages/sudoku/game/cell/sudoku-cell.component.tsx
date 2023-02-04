import React, { useMemo } from "react";
import "./sudoku-cell.component.css";

type Props = {
  cell: number | string;
  row: number;
  column: number;
  disabled?: boolean;
  invalid?: boolean;
  keyDownFn: KeyDownInCellFn;
};

export type KeyDownInCellFn = (row: number, col: number) => void;

export function SudokuCellComponent(props: Props) {
  function getCellValue() {
    return parseInt(`${props.cell}`) > 0 ? props.cell : "";
  }
  function isDisabled() {
    return props.disabled || Boolean(getCellValue());
  }
  function createSudokuInputName(row: number, col: number) {
    return `(${row}, ${col})`;
  }
  function createSudokuInputId(inputName: string, row: number, col: number) {
    return `${inputName}${createSudokuInputName(row, col)}`;
  }
  function keyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" || event.key === "Tab") {
      document.getElementById(getId())?.blur();
    }
    props.keyDownFn(props.row, props.column);
  }

  function getId() {
    return createSudokuInputId("sudoku-input", props.row, props.column);
  }

  function getClassName() {
    return useMemo(() => {
      let className = "sudoku-input";
      if (props.invalid) {
        className += " sudoku-cell-invalid";
      }
      return className;
    }, [props.invalid]);
  }

  return (
    <td>
      <input
        id={getId()}
        name={createSudokuInputName(props.row, props.column)}
        type="number"
        defaultValue={getCellValue()}
        className={getClassName()}
        onKeyDown={keyDown}
        disabled={isDisabled()}
        max={99}
      />
    </td>
  );
}
