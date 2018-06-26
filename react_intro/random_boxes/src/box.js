import React from 'react';
import PropTypes from 'prop-types';
import "./box.css"

const Box = props => (
      <div className="box" 
      style={{
          backgroundColor:props.color
        }}>
      </div>
);

Box.propTypes = {
      color: PropTypes.string, 
}

export default Box;