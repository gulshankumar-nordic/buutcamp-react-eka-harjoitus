import React from 'react';

const output = (props) => {
    return ( 
        <div className="outputDiv">
        <h3 className="output">{props.outputValue}</h3>
        <p>{props.valueText}</p>
    </div> 
     );
}
 
export default output;
