import React from 'react';
import '../myStyle.css';

const ComponentTwo = (props) => {
    return (
        <div id="chat">
        <p>Component two here!</p>
        {props.text}
        </div>
    )
}

export default ComponentTwo;