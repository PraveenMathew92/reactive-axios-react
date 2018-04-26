import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import stream from './Response.js';
import Rx from 'rxjs/Rx';
import axios from "axios";


class App extends Component {

  state = {
    time : "Nan"
  };

   componentDidMount() {
      stream.subscribe(response => 
        this.setState({ time : response}) 
        );
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.time}
        </p>
      </div>
    );
  }
}

export default App;
