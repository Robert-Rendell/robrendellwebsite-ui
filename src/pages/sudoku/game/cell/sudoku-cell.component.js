import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './sudoku-cell.component.css';

class SudokuCellComponent extends Component {

  constructor(props) {
    super(props);
    this.createSudokuInputName = this.createSudokuInputName.bind(this);
    this.createSudokuInputId = this.createSudokuInputId.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.getCellValue = this.getCellValue.bind(this);
    this.getId = this.getId.bind(this);
  }

  createSudokuInputName(row, col) {
    return `(${row}, ${col})`;
  }

  createSudokuInputId(inputName, row, col) {
    return `${inputName}${this.createSudokuInputName(row, col)}`;
  }

  keyDown(event) {
    if (event.keyCode === 13) {
      document.getElementById(this.getId()).blur();
    }
  }

  getCellValue() {
    return parseInt(this.props.cell) > 0 ? this.props.cell : '';
  }

  getId() {
    return this.createSudokuInputId("sudoku-input",this.props.row, this.props.column);
  }

  render() {
    return (
      <td>
        <input id={this.getId()}
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
