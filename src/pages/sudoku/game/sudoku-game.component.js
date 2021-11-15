import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import SudokuCellComponent from './cell/sudoku-cell.component';
import axios from 'axios';
import config from '../../../config';
import './sudoku-game.component.css';

class SudokuGameComponent extends React.Component {

  static Divs = {
    SudokuBoard: 'render-sudoku-board',
  };

  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        sudokuBoard: [],
    };
  }

  getSudoku(id) {
    axios.get(`${config.backend}/sudoku/${id}`,
      { headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log(response.data);
      const sudoku = response.data['problem'];
      this.setState({sudokuBoard: sudoku});
      const div = document.getElementById(SudokuGameComponent.Divs.SudokuBoard);
      ReactDOM.render(this.renderSudoku(), div);
    })
  }

  showShareLink(x, shareId) {

  }

  componentDidMount() {
    const id = this.props.sudokuId;
    console.log(`Got sudoku id: ${id}`);
    if (id) {
      this.getSudoku(id);
    } else {
      this.populateSudokuGrid();
    }
  }

  populateSudokuGrid() {
    this.setState({
      sudokuBoard: [
        [1,2,3,1,2,3,1,2,3],
        [1,2,3,1,2,3,1,2,3],
        [1,2,3,1,2,3,1,2,3],
        [1,2,3,1,2,3,1,2,3],
        [1,2,3,1,2,3,1,2,3],
        [1,2,3,1,2,3,1,2,3],
        [1,2,3,1,2,3,1,2,3],
        [1,2,3,1,2,3,1,2,3],
        [1,2,3,1,2,3,1,2,3],
      ]
    });
  }

  renderSudoku() {
    if (this.state.sudokuBoard.length === 0) return (<h2>Loading...</h2>)
    return this.state.sudokuBoard.map((sudokuRow, rowIndex) => {
        return (
          <tr>
          { 
            sudokuRow.map((cell, columnIndex) => {
              return <SudokuCellComponent cell={cell} 
                                          row={rowIndex} 
                                          column={columnIndex}/>
            })
          }
          </tr>
        );
    });
  }

  giveUp() {
    //
  }

  validateSudoku() {
    //
  }

  render() {
    return (
      <div id="sudoku-game">
        <div class="row">
          <div class="col left-right-padding-5">
              <div id="board" class="sudoku-parent">
                  <Table striped bordered hover>
                    <tbody id={SudokuGameComponent.Divs.SudokuBoard}>
                        { this.renderSudoku() }
                    </tbody>
                  </Table>
              </div>
              <Button onClick={this.giveUp()} disabled>Give Up</Button>
              <Button onClick={this.validateSudoku()} disabled>Check</Button>
              <input type="text" id="txtShareLink" class="inline form-control"
                onFocus={this.showShareLink(this,'{{ sudoku_id }}')}
                onBlur={() => this.value = 'click for share link'}
                value="click for share link"
                disabled
              />
          </div>
        </div>
      </div>
    );
  }
}

export default SudokuGameComponent;
