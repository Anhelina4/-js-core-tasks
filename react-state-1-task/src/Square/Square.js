import React from 'react';

function Square(props) {
    const {color, setColor} = props
    return (
        <button style={{width:"30px", height:"30px",margin:"10px", backgroundColor:`${color}`, border:"none"}} onClick={setColor}>
        </button>
    );
}

export default Square;