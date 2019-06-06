import React from 'react';
import '../myStyle.css';
import getWeather from '../openWeatherMapAPI';

const ComponentTwo = (props) => {
    return (
        <div id="chat">
            <p>Component two here!</p>
            {getWeather}
        </div>
    )
}

export default ComponentTwo;