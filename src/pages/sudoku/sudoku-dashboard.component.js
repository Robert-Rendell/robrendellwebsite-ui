import React from 'react';

class SudokuDashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.getHomePageImageUrls();
  }

  render() {
    return (
      <div>
        <h1>Sudoku!</h1>
      </div>
    );
  }
}

export default SudokuDashboardComponent;