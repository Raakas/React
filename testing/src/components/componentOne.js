import React from 'react';
import '../myStyle.css';

const ComponentOne = (props) => {
    return (
      <div>
        <b>{props.name}</b>
        <p>{props.text}</p>
      </div>
    )
}


export default ComponentOne;
