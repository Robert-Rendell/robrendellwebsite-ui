import React from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';
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
        puzzle: [],
        sudokuBoard: [],
        submission: [],
        sudokuId: '',
        submissionId: '',
        submitterName: '',
    };
    // Oh my god JavaScript...
    this.readSudokuGrid = this.readSudokuGrid.bind(this);
    this.submitSudoku = this.submitSudoku.bind(this);
    this.valid = this.valid.bind(this);
    this.invalid = this.invalid.bind(this);
    this.complete = this.complete.bind(this);
    this.disableValidateButton = this.disableValidateButton.bind(this);
    this.enableValidateButton = this.enableValidateButton.bind(this);
    this.reset = this.reset.bind(this);
    this.disableBoard = this.disableBoard.bind(this);
    this.getSubmitterName = this.getSubmitterName.bind(this);
    this.isSubmissionComplete = this.isSubmissionComplete.bind(this);
    this.getSudokuLeaderboard = this.getSudokuLeaderboard.bind(this);
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
      this.getSudokuLeaderboard(id);
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
        puzzle: JSON.stringify(sudoku),
        sudokuBoard: sudoku,
        submissionId,
        sudokuId,
      });
    });
  }

    /**
   * Response:
   * - leaderboard: []
   * - { 'timeTakenMs' | 'dateSubmitted' | 'submitterName' }
   */
  getSudokuLeaderboard(id) {
    axios.get(`${config.backend}/sudoku/leaderboard/${id}`,
      { headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log(response.data);
      this.setState({
        leaderboard: response.data['leaderboard'],
      });
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
    let submitter = '';
    this.disableValidateButton();
    const sudokuGrid = this.readSudokuGrid();
    if (this.isSubmissionComplete(sudokuGrid)) {
      submitter = this.getSubmitterName();
    }
    axios.post(`${config.backend}/sudoku/submit`,
      { 
        headers: {'Content-Type': 'application/json'},
        "sudokuId": this.state.sudokuId,
        "sudokuSubmission": JSON.stringify(sudokuGrid),
        "sudokuSubmissionId": this.state.submissionId,
        "timeTaken": 0,
        "submitterName": submitter,
      }
    ).then((response) => {
      console.log(response.data);
      if (response.data.valid && response.data.complete) {
        this.complete(response.data.timeTakenMs);
      } else if (response.data.valid) {
        this.valid();
      } else if (!response.data.valid) {
        this.invalid();
      }
    });
  }

  giveUp() {
    //
  }

  isSubmissionComplete(sudokuGrid) {
    return !JSON.stringify(sudokuGrid).includes('0');
  }

  getSubmitterName() {
    if (this.state.submitterName.length === 0) {
      const submitterName = prompt('Enter your name or leave blank')
      this.setState({
        submitterName,
      });
      return submitterName;
    }
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

  invalid() {
    this.enableValidateButton();
    alert('Something is wrong!');
  }

  valid() {
    this.enableValidateButton();
    alert('Sudoku is valid! Keep going!');
  }

  complete(timeTakenMs) {
    this.disableBoard();
    this.disableValidateButton();
    alert(`Sudoku was completed in ${Math.round(timeTakenMs / 1000)} seconds! Well done ${this.state.submitterName}!!`);
  }

  disableBoard() {
    const board = document.getElementById(SudokuGameComponent.Div.SudokuBoard);
    board.disabled = true;
  }

  disableValidateButton() {
    const btnValidate = document.getElementById(SudokuGameComponent.Button.Validate);
    btnValidate.disabled = true;
  }

  enableValidateButton() {
    const btnValidate = document.getElementById(SudokuGameComponent.Button.Validate);
    btnValidate.disabled = false;
  }

  reset() {
    this.setState({
      sudokuBoard: JSON.parse(this.state.puzzle),
    });
  }

  render() {
    const leaderboardEntries = this.state.leaderboard?.slice(0,5).map((item, index) => {
      return ( <tr key={`leaderboard-entry-${index}`}>
        <td>{ index + 1 }</td>
        <td>{ new Date(item.dateSubmitted).toUTCString().replace('GMT',"") }</td>
        <td>{ item.submitterName || 'anonymous' }</td>
        <td>{ Math.round(item.timeTakenMs / 1000) }</td>
    </tr>)
    });
    const leaderboard = (
      <div id="leaderboard_parent" className="col left-right-padding-5">
        <div id="leaderboard">
          <Table striped bordered hover>
              <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Time</th>
                  </tr>
              </thead>
              <tbody>
                { leaderboardEntries }
              </tbody>
          </Table>
        </div>
      </div>
    );
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
              <Button id={SudokuGameComponent.Button.GiveUp} onClick={this.giveUp} disabled>Give Up</Button>
              <Button id={SudokuGameComponent.Button.Validate} onClick={this.submitSudoku}>Check / Validate</Button>
              <Button id={SudokuGameComponent.Button.Reset} onClick={this.reset} disabled>Reset</Button>
              {/* <input type="text" id="txtShareLink" className="inline form-control"
                onFocus={this.showShareLink(this,'{{ sudoku_id }}')}
                onBlur={() => this.value = 'click for share link'}
                value="click for share link"
                disabled
              /> */}
          </div>
          {leaderboard}
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

SudokuGameComponent.Button = {
  GiveUp: 'btnGiveUp',
  Validate: 'btnValidate',
  Reset: 'btnReset',
};
