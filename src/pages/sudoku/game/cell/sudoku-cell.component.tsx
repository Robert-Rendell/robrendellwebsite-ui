import React, { useMemo, useState } from "react";
import "./sudoku-cell.component.css";

type Props = {
  cell: number | string;
  row: number;
  column: number;
  disabled?: boolean;
  invalid?: boolean;
  notesMode?: boolean;
  keyDownFn: KeyDownInCellFn;
};

export type KeyDownInCellFn = (row: number, col: number) => void;

const maxNotesLength = 4;

export function SudokuCellComponent(props: Props) {
  const [notes, setNotes] = useState<string[]>([]);
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
    if (/[123456789]/.test(event.key)) {
      if (props.notesMode) {
        if (notes.length < maxNotesLength) {
          notes.push(event.key);
        }
        event.preventDefault();
      } else {
        document.getElementById(getId())?.blur();
        event.currentTarget.value = event.key;
      }
    }
    if (event.key === "Backspace" && props.notesMode) {
      setNotes(notes.slice(0, -1));
    }
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
    props.keyDownFn(props.row, props.column);
  }

  function getId() {
    return createSudokuInputId("sudoku-input", props.row, props.column);
  }

  function useClassName() {
    return useMemo(() => {
      let className = "sudoku-input";
      if (props.invalid) {
        className += " sudoku-cell-invalid";
      }
      if (isDisabled()) {
        className += " sudoku-input-disabled";
      }
      return className;
    }, [props.invalid, props.disabled]);
  }

  return (
    <td className="sudoku-cell-td">
      <input
        id={getId()}
        name={createSudokuInputName(props.row, props.column)}
        type="number"
        defaultValue={getCellValue()}
        className={useClassName()}
        onKeyDown={keyDown}
        disabled={isDisabled()}
        max={99}
      />
      <span id="sudoku-note-tl" className="sudoku-note">
        {notes[0]}
      </span>
      <span id="sudoku-note-tr" className="sudoku-note">
        {notes[1]}
      </span>
      <span id="sudoku-note-bl" className="sudoku-note">
        {notes[2]}
      </span>
      <span id="sudoku-note-br" className="sudoku-note">
        {notes[3]}
      </span>
    </td>
  );
}
