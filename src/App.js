import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaRocket } from 'react-icons/fa';

import Globe from './Globe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Globe className="App-logo" />
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
