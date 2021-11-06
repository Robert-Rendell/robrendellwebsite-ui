import React from 'react';
import Button from 'react-bootstrap/Button';
import './sudoku-game.component.css';

class SudokuGameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // nothing
  }

  render() {
    return (
      <div id="sudoku-game">
        <h1>Sudoku Game</h1>
      </div>
    );
  }
}

export default SudokuGameComponent;