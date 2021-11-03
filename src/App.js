import logo from './logo.svg';
import './App.css';
import getHomePageImages from './get-home-page-images';

function App() {
  getHomePageImages();
  return (
    <div className="App">
      <header className="App-header">
        <img id="home-page-img" src={logo} className="App-logo" alt="logo" />
        <div id="home-page-img-div"></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
