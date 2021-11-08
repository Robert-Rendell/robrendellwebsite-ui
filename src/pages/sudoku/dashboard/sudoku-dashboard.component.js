import React from 'react';
import Button from 'react-bootstrap/Button';
import './sudoku-dashboard.component.css';
import { Link } from "react-router-dom";

class SudokuDashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // nothing
  }

  render() {
    return (
      <div id="sudoku-dashboard">
        <h1>Sudoku!</h1>
        <hr/>
        <h2>Play!</h2>
        <Link to="/sudoku/play">Populate sudoku</Link>
        <hr/>
        <h2>Generate</h2>
        <div id="difficulty-button-panel-parent">
          <div id="difficulty-button-panel">
            <Button>
              Easy
            </Button>
            <Button>
              Medium
            </Button>
            <Button>
              Hard
            </Button>
          </div>
        </div>

        <hr/>
        <h2>Entities</h2>
        <ul>
          <li>
            Sudoku
            <ul>
              <li>generatedDate</li>
              <li>problem</li>
              <li>solution</li>
            </ul>
          </li>
          <li>
            Solver
            <ul>
              <li>name</li>
              <li>ip address</li>
            </ul>
          </li>
          <li>
            Submission
            <ul>
              <li>completed: [True or False] - allows for partial submissions</li>
              <li>date/time</li>
            </ul>
          </li>
        </ul>

        <hr/>
        <h2>API</h2>
        <p>Generate a unique sudoku with one solution, save in dynamodb straight from lambda</p>
        <ul>
          <li>GET generate/easy</li>
          <li>GET generate/medium</li>
          <li>GET generate/hard</li>
        </ul>

        <hr/>
        <p>Get a sudoku that has already been generated and saved in dynamodb</p>
        <ul>
          <li>POST sudoku/get/[id] - get sudoku but post ip address (try to map ip to submission name)</li>
        </ul>

        <hr/>
        <p>
        When sudoku is finished by user or partially finished, validate their input first with the 
        front end. If the front end says it's correct When they
        finish the sudoku and it is correct, send respond with success to update the UI.
        </p>

        <ul>
          <li>POST sudoku/validate-input</li>
        </ul>

        <p>Params</p>
        <ul>
          <li>sudokuId</li>
          <li>puzzle</li>
          <li>user-name</li>
          <li>ip-address</li>
          <li>date</li>
          <li>time-started</li>
          <li>time-now</li>
          <li>time-elapsed</li>
          <li>uiSudokuValidation</li>
        </ul>
      </div>
    );
  }
}

export default SudokuDashboardComponent;