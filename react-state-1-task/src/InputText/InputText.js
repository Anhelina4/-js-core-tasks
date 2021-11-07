import React, {useState} from 'react';

function InputText(props) {
    const {value, changeInput, check,} = props
    return (
        <div style={{display:"flex"}}>
        <input type="text" onChange={changeInput} value={value}>
        </input>
        <button onClick={check}>Submit</button>
        </div>
    );
}

export default InputText;