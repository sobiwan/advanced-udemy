import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What Todo, What Todo?</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
