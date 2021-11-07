import React from 'react';
import Button from 'react-bootstrap/Button';
import SudokuCellComponent from './cell/sudoku-cell.component';
import './sudoku-game.component.css';

class SudokuGameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        sudokuBoard: [
            [1,2,3,1,2,3,1,2,3],
            [1,2,3,1,2,3,1,2,3],
            [1,2,3,1,2,3,1,2,3]
        ],
    };
  }

  showShareLink(x, shareId) {

  }

  componentDidMount() {
    // nothing
  }

  renderSudoku(row) {
    return this.state.sudokuBoard.map((sudokuRow, rowIndex) => {
        return sudokuRow.map((cell, columnIndex) => {
            return (
                <tr>
                    <SudokuCellComponent cell={cell} 
                                         row={rowIndex}
                                         column={columnIndex}
                    />
                </tr>
            );
         });
     });
  }

  render() {
    return (
      <div id="sudoku-game">
        <div class="row">
          <div class="col left-right-padding-5">
              <div id="board" class="sudoku-parent">
                  <table class="table table-bordered sudoku-table">
                   { this.renderSudoku() }
                  </table>
              </div>
              <Button OnClick="giveUp()">Give Up</Button>
              <Button OnClick="check()">Check</Button>
              <input type="text" id="txtShareLink" class="inline form-control"
                onFocus={this.showShareLink(this,'{{ sudoku_id }}')}
                onFocusout={this.value = 'click for share link'}
                onMouseup={false}
                value="click for share link"/>
          </div>
        </div>
      </div>
    );
  }
}

export default SudokuGameComponent;