import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <script id="hydro_config" type="text/javascript">
        window.Hydro_tagId = "12682a59-6011-4b0f-8880-262303d61e81";
      </script>
      <script id="hydro_script" src="https://track.hydro.online/"></script>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
