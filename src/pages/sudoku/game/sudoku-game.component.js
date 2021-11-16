import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import SudokuCellComponent from './cell/sudoku-cell.component';
import axios from 'axios';
import config from '../../../config';
import './sudoku-game.component.css';

class SudokuGameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        sudokuBoard: [],
        submission: [],
        sudokuId: '',
        submissionId: '',
    };
    // Oh my god JavaScript...
    this.readSudokuGrid = this.readSudokuGrid.bind(this);
    this.submitSudoku = this.submitSudoku.bind(this);
    this.valid = this.valid.bind(this);
    this.complete = this.complete.bind(this);
    // Use arrow funtions instead of having to bind to 'this'
  }

  showShareLink(x, shareId) {
    console.log(x, shareId);
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

  readSudokuGrid() {
    const sudokuGrid = [];
    for (let row = 0; row < 9; row++) {
      const rowCells = [];
      sudokuGrid.push(rowCells);
      for (let col = 0; col < 9; col++) {
        const v = document.getElementById(`sudoku-input(${row}, ${col})`)?.value;
        rowCells.push(v ? parseInt(v) : 0);
      }
    }
    console.log(sudokuGrid);
    return sudokuGrid;
  }

  /**
   * Response:
   * - sudokuId: SudokuId
   * - puzzle: number[][] | undefined,
   * - submissionId: SubmissionId,
   */
  getSudoku(id) {
    axios.get(`${config.backend}/sudoku/play/${id}`,
      { headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log(response.data);
      const sudoku = response.data['puzzle'];
      const submissionId = response.data['submissionId'];
      const sudokuId = response.data['sudokuId'];
      this.setState({
        sudokuBoard: sudoku,
        submissionId,
        sudokuId,
      });
      const div = document.getElementById(SudokuGameComponent.Div.SudokuBoard);
      ReactDOM.render(this.renderSudoku(), div);
    });
  }

  /**
   * API call to POST /sudoku/submit
   * Request:
   * - sudokuId: SudokuId,
   * - sudokuSubmission: string,
   * - sudokuSubmissionId: SubmissionId,
   * 
   * Response:
   * - errorMessage: string
   * - complete: boolean
   * - valid: boolean
   */
  submitSudoku() {
    const sudokuGrid = this.readSudokuGrid();
    axios.post(`${config.backend}/sudoku/submit`,
      { 
        headers: {'Content-Type': 'application/json'},
        "sudokuId": this.state.sudokuId,
        "sudokuSubmission": JSON.stringify(sudokuGrid),
        "sudokuSubmissionId": this.state.submissionId,
        "timeTaken": 0
      }
    ).then((response) => {
      console.log(response.data);
      if (response.data.valid && response.data.complete) {
        this.complete();
      } else {
        if (response.data.valid) this.valid();
      }
    });
  }

  giveUp() {
    //
  }

  renderSudoku() {
    if (this.state.sudokuBoard.length === 0) return (<h2>Loading...</h2>)
    return this.state.sudokuBoard.map((sudokuRow, rowIndex) => {
        return (
          <tr key={`row(${rowIndex})`}>
          { 
            sudokuRow.map((cell, columnIndex) => {
              return <SudokuCellComponent key={`cell(${rowIndex},${columnIndex})`}
                                          cell={cell} 
                                          row={rowIndex} 
                                          column={columnIndex}/>
            })
          }
          </tr>
        );
    });
  }

  valid() {
    alert('Sudoku is valid! Keep going!');
  }

  complete() {
    alert('Sudoku is completed! Well done!!');
  }

  render() {
    return (
      <div id="sudoku-game">
        <div className="row">
          <div className="col left-right-padding-5">
              <div id="board" className="sudoku-parent">
                  <Table striped bordered hover>
                    <tbody id={SudokuGameComponent.Div.SudokuBoard}>
                        { this.renderSudoku() }
                    </tbody>
                  </Table>
              </div>
              <Button onClick={this.giveUp} disabled>Give Up</Button>
              <Button onClick={this.submitSudoku}>Check</Button>
              {/* <input type="text" id="txtShareLink" className="inline form-control"
                onFocus={this.showShareLink(this,'{{ sudoku_id }}')}
                onBlur={() => this.value = 'click for share link'}
                value="click for share link"
                disabled
              /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SudokuGameComponent;

SudokuGameComponent.propTypes = {
  sudokuId: PropTypes.string,
}

SudokuGameComponent.Div = {
  SudokuBoard: 'render-sudoku-board',
};