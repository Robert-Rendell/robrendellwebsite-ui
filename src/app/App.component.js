import './App.component.css';
import React from 'react';
import { NavComponent } from '../nav/nav.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // load
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <NavComponent />
        </div>
      </div>
    );
  }
}

export default App;
