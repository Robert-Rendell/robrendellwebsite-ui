import React from 'react';
import axios from 'axios';
import config from '../../../config';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import './sudoku-dashboard.component.css';

class SudokuDashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      generationJobId: undefined,
      retries: 0,
    };
    this.generateSudoku = this.generateSudoku.bind(this);
    this.generateMediumSudoku = this.generateMediumSudoku.bind(this);
    this.generateEasySudoku = this.generateEasySudoku.bind(this);
    this.generateHardSudoku = this.generateHardSudoku.bind(this);
    this.generateVeryHardSudoku = this.generateVeryHardSudoku.bind(this); 
    this.toggleGeneration = this.toggleGeneration.bind(this);
    this.checkSudokuGeneration = this.checkSudokuGeneration.bind(this);
    this.sudokuGenerated = this.sudokuGenerated.bind(this);
    this.watchSudokuGeneration = this.watchSudokuGeneration.bind(this);
    this.setSudokuResult = this.setSudokuResult.bind(this);
    this.checkGenerationLoop = undefined; // set later
  }

  componentDidMount() {
    // nothing
  }

  /**
   * roberto: string;
   * difficulty: string;
   * generatorUserName: string;
   */
  generateSudoku(difficulty) {
    this.toggleGeneration(true);
    axios.post(`${config.backend}/sudoku/add`, { 
      headers: {'Content-Type': 'application/json'},
      roberto: "testing",
      difficulty,
      generatorUserName: 'implement on front end',
    }).then((response) => {
      const generationJobId = response.data['generationJobId'];
      if (!generationJobId) {
        console.error('There was a problem getting the generationJobId');
        return;
      } 
      if (this.checkGenerationLoop) {
        console.error('Already checking for a generation...');
        return;
      }
      this.watchSudokuGeneration();
      console.log("Job Id: " + generationJobId);
      this.setState({ generationJobId })
      this.setSudokuResult(`Generating ${difficulty} sudoku...`);
    }).catch((reason) => {
      console.error(reason);
    });
  }

  generateEasySudoku() { this.generateSudoku('easy'); }
  generateMediumSudoku() { this.generateSudoku('medium'); }
  generateHardSudoku() { this.generateSudoku('hard'); }
  generateVeryHardSudoku() { this.generateSudoku('very-hard'); }

  toggleGeneration(toggle) {
    console.log(toggle);
    document.getElementById(SudokuDashboardComponent.Button.Easy).disabled = toggle;
    document.getElementById(SudokuDashboardComponent.Button.Medium).disabled = toggle;
    document.getElementById(SudokuDashboardComponent.Button.Hard).disabled = toggle;
    document.getElementById(SudokuDashboardComponent.Button.VeryHard).disabled = toggle;
  }

  watchSudokuGeneration() {
    this.checkGenerationLoop = setInterval(() => this.checkSudokuGeneration(), 10000);
  }

  /**
   * Receives a message from sudoku/list as follows:
  [
      {
          "dateGenerated": "2021-12-31T14:08:15.659Z",
          "puzzle": "[[0, 8, 9, 2, 0, 0, 0, 4, 0], [3, 0, 0, 6, 0, 0, 0, 9, 7], [7, 0, 0, 0, 0, 0, 0, 0, 0], [9, 2, 4, 7, 6, 5, 0, 8, 0], [0, 0, 3, 4, 1, 0, 0, 0, 6], [1, 0, 6, 0, 0, 3, 5, 0, 4], [2, 0, 0, 0, 9, 0, 3, 6, 0], [4, 3, 0, 0, 0, 6, 0, 0, 9], [6, 9, 8, 0, 7, 0, 0, 5, 2]]",
          "solution": "[[5, 8, 9, 2, 3, 7, 6, 4, 1], [3, 4, 1, 6, 5, 8, 2, 9, 7], [7, 6, 2, 1, 4, 9, 8, 3, 5], [9, 2, 4, 7, 6, 5, 1, 8, 3], [8, 5, 3, 4, 1, 2, 9, 7, 6], [1, 7, 6, 9, 8, 3, 5, 2, 4], [2, 1, 7, 5, 9, 4, 3, 6, 8], [4, 3, 5, 8, 2, 6, 7, 1, 9], [6, 9, 8, 3, 7, 1, 4, 5, 2]]",
          "sudokuId": "7adf4f39-7733-470e-acc7-48f40b6ab8c2",
          "clues": "39",
          "difficulty": "medium",
          "generatorIPAddress": "::1",
          "generatorUserName": "implement on front end"
      }
  ]*/
  checkSudokuGeneration() {
    axios.post(`${config.backend}/sudoku/list`, { 
      headers: {'Content-Type': 'application/json'},
      filters: {
        generatorJobId: this.state.generationJobId,
      },
      generatorUserName: 'implement on front end',
    }).then((response) => {
      console.log(response);
      if (response.data?.length > 0) {
        const sudokuId = response.data[0]['sudokuId'];
        this.sudokuGenerated(sudokuId);
      } else {
        if (this.state.retries < 1) {
          this.setState({ retries: this.state.retries + 1 });
          this.checkGenerationLoop = setInterval(() => this.checkSudokuGeneration(), 10000);
          this.setSudokuResult(`No response yet: retries (${this.state.retries})`);
        } else {
          this.setSudokuResult(`Sudoku Generation timed out.`);
        }
      }
    }).catch((reason) => {
      console.error(reason);
    });
    clearTimeout(this.checkGenerationLoop);
  }

  setSudokuResult(message) {
    document.getElementById(SudokuDashboardComponent.Div.SudokuGenerationResults).innerHTML = message;
  }

  sudokuGenerated(sudokuId) {
    console.log('Sudoku generated!');
    this.setState({ retries: 0, generationJobId: null });
    this.setSudokuResult(`Sudoku Generated! <a href="/sudoku/play/${sudokuId}">Play</a>`);
    this.toggleGeneration(false);
    this.checkGenerationLoop = null;
  }

  render() {
    return (
      <div id="sudoku-dashboard">
        <h1>Sudoku!</h1>
        <b>Progress Updates:</b>
        <p>
          - 28/11/21 @ 14.00 - Generate sudoku using S3 upload to trigger AWS Lambda (keeping costs down)<br/>
          - 16/11/21 @ 14.43 - Developed endpoint for user to submit partial/completed sudokus and have it validated.<br/>
          - 15/11/21 @ 15.53 - Sudoku loaded from AWS DynamoDB
        </p>
        <hr/>
        <h2>Play Sudoku (work in progress)</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Sudoku name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>Test Sudoku</td>
              <td><Link to="/sudoku/play/0">Play!</Link></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Test Sudoku (only one empty cell)</td>
              <td><Link to="/sudoku/play/1">Play!</Link></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Generated Hard Sudoku</td>
              <td><Link to="/sudoku/play/5485039b-4d70-4cba-befd-bc326ab32ff0">Play!</Link></td>
            </tr>
          </tbody>
        </Table>
        <br/>
        <h2>Generate Sudoku</h2>
        <div id="difficulty-button-panel-parent">
          <div id="difficulty-button-panel">
            <Button id={SudokuDashboardComponent.Button.Easy} onClick={this.generateEasySudoku}>
              Easy
            </Button>
            <Button id={SudokuDashboardComponent.Button.Medium} onClick={this.generateMediumSudoku}>
              Medium
            </Button>
            <Button id={SudokuDashboardComponent.Button.Hard} onClick={this.generateHardSudoku}>
              Hard
            </Button>
            <Button id={SudokuDashboardComponent.Button.VeryHard} onClick={this.generateVeryHardSudoku}>
              Very Hard
            </Button>
          </div>
          <div id={SudokuDashboardComponent.Div.SudokuGenerationResults}></div>
        </div>

        <hr/>
        <h2>
          Documentation: Swagger API
          <br/>
          <a href="https://app.swaggerhub.com/apis-docs/rob-tea/robrendellwebsite/1.0.0">
            https://app.swaggerhub.com/apis-docs/rob-tea/robrendellwebsite/1.0.0
          </a>
        </h2> 
      </div>
    );
  }
}

export default SudokuDashboardComponent;

SudokuDashboardComponent.Div = {
  SudokuGenerationResults: 'sudoku-gen-results',
}

SudokuDashboardComponent.Button = {
  Easy: 'btnEasy',
  Medium: 'btnMedium',
  Hard: 'btnHard',
  VeryHard: 'btnVeryHard',
}
