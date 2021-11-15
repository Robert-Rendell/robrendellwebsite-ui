import React, { Component } from 'react';
import './sudoku-cell.component.css';

class SudokuCellComponent extends Component {

  createSudokuInputName(row, col) {
    return `(${row}, ${col})`;
  }

  createSudokuInputId(inputName, row, col) {
    return `${inputName}${this.createSudokuInputName(row, col)}`;
  }

  keyDown(event) {
    if(event.keyCode === 13) this.blur();
  }

  getCellValue() {
    return parseInt(this.props.cell) > 0 ? this.props.cell : '';
  }

  onChangeHandler() {
    return '';
  }

  render() {
    return (
      <td>
        <input id={this.createSudokuInputId("sudoku-input",this.props.row, this.props.column)}
              name={this.createSudokuInputName(this.props.row, this.props.column)}
              type="number"
              value={this.getCellValue()}
              class="sudoku-input"
              onKeyDown={this.keyDown}
              defaultValue={ this.getCellValue() ? undefined : this.onChangeHandler}
        />
      </td>
    );
  }
}

export default SudokuCellComponent;