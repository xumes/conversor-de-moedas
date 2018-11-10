import React, { Component } from 'react';
import 'bootstrap-css-only'
import './App.css';
import Header from './components/Header';
import Conversor from './components/Conversor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Conversor />
      </div>
    );
  }
}

export default App;
