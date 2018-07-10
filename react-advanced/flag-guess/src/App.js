import React, { Component } from 'react';
import CountryGame from './CountryGame';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fun with Flags!</h1>
        </header>
        <CountryGame />
      </div>
    );
  }
}

App.defaultProps = {
  allCountries: []
}

export default App;
