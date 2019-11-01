import React from 'react';
import Preload from 'components/Preload'
import OurClients from 'components/OurClients'
import './App.css'
import './assets/styles/common.sass'

function App() {
  return (
    <div className="App">
      <OurClients></OurClients>
      {/* <Preload></Preload> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
