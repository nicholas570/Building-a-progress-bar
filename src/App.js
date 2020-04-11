import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainProgressBar from "./components/progress-bar/MainProgressBar";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <MainProgressBar />
      </header>
    </div>
  );
}

export default App;
