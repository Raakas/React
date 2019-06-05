import React from 'react';
import '../myStyle.css';

const ComponentOne = (props) => {
    return (
      <div>
        <input type="text" value={props.text}/>
        <button onClick={props.changeState}>Glicks</button>
      </div>
    )
}

export default ComponentOne;