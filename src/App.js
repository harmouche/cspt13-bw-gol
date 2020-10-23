import React from 'react';
import './App.css';
import { HashRouter as Router } from "react-router-dom"
import Main from './components/Main';
import Rules from './components/Rules'

function App() {
  return(
  <Router>
    <div className="App">
      <Main />
      <Rules />
    </div>
  </Router>
  );
}

export default App;
