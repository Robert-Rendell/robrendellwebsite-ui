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
        submission: [],
        submissionId: '',
    };
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
      const div = document.getElementById(SudokuGameComponent.Divs.SudokuBoard);
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
    axios.post(`${config.backend}/sudoku/submit`,
      { 
        headers: {'Content-Type': 'application/json'},
        "sudokuId": "0",
        "sudokuSubmission": "[[1,6,2,4,5,3,7,8,9],[3,7,5,9,1,8,4,6,2],[9,8,4,6,2,7,5,3,1],[6,3,1,7,8,4,9,2,5],[8,4,7,2,9,5,6,1,3],[5,2,9,1,3,6,8,7,4],[2,9,8,5,7,1,3,4,6],[4,1,3,8,6,9,2,5,7],[7,5,6,3,4,2,1,9,8]]",
        "timeTaken": 0
      }
    ).then((response) => {
      console.log(response.data);
    });
  }

  giveUp() {
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
              <Button onClick={this.giveUp} disabled>Give Up</Button>
              <Button onClick={this.submitSudoku}>Check</Button>
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
