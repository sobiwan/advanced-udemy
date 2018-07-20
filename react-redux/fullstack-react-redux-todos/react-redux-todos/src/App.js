import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';
import {Link, Route, Redirect} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What Todo, What Todo?</h1>
        <p>
          <Link to="/todos">See my Todos</Link>
        </p>
        <p>
          <Link to="/todos/new">Add a Todo</Link>
        </p>
        <Route path="/todos" component={TodoList}/>
        <Route exact path="/" render={()=><Redirect to ="/todos" />}/>
      </div>
    );
  }
}

export default App;
