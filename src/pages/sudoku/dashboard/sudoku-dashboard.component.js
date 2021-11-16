import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './sudoku-dashboard.component.css';

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
        <h2>Play Sudoku (Gradual work in progress)</h2>
        <b>Progress Updates:</b>
        <p>
          - 16/11/21 @ 14.43 - Developed endpoint for user to submit partial/completed sudokus and have it validated.<br/>
          - 15/11/21 @ 15.53 - Sudoku loaded from AWS DynamoDB but the UI needs more dev work to play it
        </p>
        <Link to="/sudoku/play">Populate sudoku board</Link>
        <br/>
        <Link to="/sudoku/play/0">Play a sudoku</Link>
        <br/>
        <h2>Generate Sudoku (coming soon)</h2>
        <div id="difficulty-button-panel-parent">
          <div id="difficulty-button-panel">
            <Button disabled>
              Easy
            </Button>
            <Button disabled>
              Medium
            </Button>
            <Button disabled>
              Hard
            </Button>
          </div>
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