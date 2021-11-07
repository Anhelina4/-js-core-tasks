import React, {useState} from 'react';
import InputText from './InputText';

function InputContainer(props) {
    const [message, setMessage] = useState('')
    const handleInput=(e)=>{
        setMessage(e.target.value)
    }
    const checkInput=()=>{
        console.log(message)
        if(message.length < 3){
            alert("Your text have to contain more than 3 symbols")
        }else if(message.length > 10){
            alert("Your text have to contain less than 10 symbols")
        }else{
            alert("Submitted")
        }
    }
    return (
        <div>
            <InputText value={message} changeInput={handleInput} check={checkInput}/>
        </div>
    );
}

export default InputContainer;