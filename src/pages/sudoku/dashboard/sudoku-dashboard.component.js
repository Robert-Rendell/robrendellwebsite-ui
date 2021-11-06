import React from 'react';
import Button from 'react-bootstrap/Button';
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

        Entities:
        - Sudoku
        - Solver: completed? Y/N (allows for partial submissions)
        API:
        Generate a unique sudoku with one solution, save in dynamodb straight from lambda
        - GET generate/easy
        - GET generate/medium
        - GET generate/hard

        Get a sudoku that has already been generated and saved in dynamodb, 
        - POST sudoku/get/[id] - get sudoku but post ip address (try to map ip to submission name)

        When sudoku is finished by user or partially finished, validate their input first with the 
        front end. If the front end says it's correct When they
        finish the sudoku and it is correct, send respond with success to update the UI.
        - POST sudoku/validate-input
            - params: 
                - sudokuId
                - puzzle
                - user-name
                - ip-address
                - date
                - time-started
                - time-now
                - time-elapsed
                - uiSudokuValidation

        - 



      </div>
    );
  }
}

export default SudokuDashboardComponent;