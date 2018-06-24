import React, { Component } from 'react';

class HobbyList extends Component {
    render () {
      const hobbies = ["Music", "Trolling", "Gaming"];
      const liStyle = {fontSize: '1.5em'};
      return (
        <ul>
              {hobbies.map((h, i) => {
                return <li key={i} style={liStyle}>{h}</li>
              })}
        </ul>
      );
    }
  }

  export default HobbyList;