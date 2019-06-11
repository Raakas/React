import React from 'react';
import '../myStyle.css';

const WeatherComponent = (props) => {
  
  return (
    <div>
      <p>Component one here!</p>
      <div>{props.city}</div>
      <p onClick={props.changeState}>Click</p>
    </div>
  )
}

export default WeatherComponent;