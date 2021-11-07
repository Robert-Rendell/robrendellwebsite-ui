import React, { Component } from 'react';

class SudokuCellComponent extends Component {

  createSudokuInputName(row, col) {
    return `(${row}, ${col})`;
  }

  createSudokuInputId(inputName, row, col) {
    return `${inputName}${this.createSudokuInputName(row, col)}`;
  }

  render() {
    return (
      <td>
        <input id={this.createSudokuInputId("sudoku-input",this.row, this.column)}
              name={this.createSudokuInputName(this.row, this.column)}
              type="number"
              class="sudoku-input"
              onKeydown = "if(event.keyCode == 13){this.blur()}"
        />
      </td>
    );
  }
}

export default SudokuCellComponent;