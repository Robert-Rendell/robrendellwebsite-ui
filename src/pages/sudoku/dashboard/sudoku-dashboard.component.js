import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
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
        <b>Progress Updates:</b>
        <p>
          - 16/11/21 @ 14.43 - Developed endpoint for user to submit partial/completed sudokus and have it validated.<br/>
          - 15/11/21 @ 15.53 - Sudoku loaded from AWS DynamoDB but the UI needs more dev work to play it
        </p>
        <hr/>
        <h2>Play Sudoku (Gradual work in progress)</h2>
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
          </tbody>
        </Table>
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