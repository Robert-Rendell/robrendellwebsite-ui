import React from 'react';

class StravaDashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // nothing
  }

  render() {
    return (
      <div>
        <h1>Strava API!</h1>
      </div>
    );
  }
}

export default StravaDashboardComponent;