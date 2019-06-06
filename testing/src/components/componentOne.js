import React from 'react';
import '../myStyle.css';
import getWeather from '../openWeatherMapAPI';

const ComponentOne = (props) => {
    return (
      <div>
        <p>Component one here!</p>
            {getWeather}
      </div>
    )
}

export default ComponentOne;