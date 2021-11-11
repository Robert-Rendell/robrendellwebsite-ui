import React from 'react';
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
        ],
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
      div.innerHTML = this.renderSudoku();
    })
  }

  showShareLink(x, shareId) {

  }

  componentDidMount() {
    // const id = this.props.match.params.id;

    // if (id) {
      
    // }
  }

  renderSudoku() {
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

  render() {
    return (
      <div id="sudoku-game">
        <div class="row">
          <div class="col left-right-padding-5">
              <div id="board" class="sudoku-parent">
                  <Table striped bordered hover>
                    <tbody>
                      <div id={SudokuGameComponent.Divs.SudokuBoard}>
                        { this.renderSudoku() }
                      </div>
                    </tbody>
                  </Table>
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
