import React from 'react';
import './App.css';
import BsState from './Context/BsState';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <BsState>
    <Home />
  </BsState>
    </div>
  );
}

export default App;
