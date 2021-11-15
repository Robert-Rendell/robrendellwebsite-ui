import React, { Component } from 'react';
import './sudoku-cell.component.css';

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
        <input id={this.createSudokuInputId("sudoku-input",this.props.row, this.props.column)}
              name={this.createSudokuInputName(this.props.row, this.props.column)}
              type="number"
              value={this.props.cell}
              class="sudoku-input"
              onKeydown = "if(event.keyCode == 13){this.blur()}"
        />
      </td>
    );
  }
}

export default SudokuCellComponent;