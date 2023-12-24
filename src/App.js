import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.png')}/>
        <p>
          Containerized React app deployed to Kubernetes cluster on Oracle Cloud.
        </p>
      </header>
    </div>
  );
}

export default App;
