import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  render() {
    return (
      <td>
        <input id={this.createSudokuInputId("sudoku-input",this.props.row, this.props.column)}
              name={this.createSudokuInputName(this.props.row, this.props.column)}
              type="number"
              defaultValue={this.getCellValue()}
              className="sudoku-input"
              onKeyDown={this.keyDown}
              disabled={this.getCellValue() ? true : false}
        />
      </td>
    );
  }
}

export default SudokuCellComponent;

SudokuCellComponent.propTypes = {
  cell: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
}
