import React from "react";
import SudokuDesigns from "../../../resources/designs/sudoku-generation.svg";

export function SudokuDesignsComponent() {
  return (
    <>
      <h2>Designs</h2>
      <img src={SudokuDesigns} width="100%" style={{ maxWidth: 1000 }} />
      <hr />
    </>
  );
}
