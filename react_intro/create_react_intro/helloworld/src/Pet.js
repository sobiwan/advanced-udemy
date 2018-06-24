import React, { Component } from 'react';
import './Pet.css';
import HobbyList from './hobby.js';

class Pet extends Component {
    render () {
      return (
        <div className="card">
          <h2 className="name">Deadmau5</h2>
          <img src="https://yt3.ggpht.com/a-/ACSszfG8jE2xuuTPIhZzxXPMQMtp9DjwzxYRJEizfg=s900-mo-c-c0xffffffff-rj-k-no"
               alt="Deadmau5 aka Joel" />
          <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
          <HobbyList />
        </div>);
    }
  }

  export default Pet;