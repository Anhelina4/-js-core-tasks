import useSetInputText from '../hooks/useSetInputText';
import './style.css';
const TodoInput =()=>{
    const {setInputText} = useSetInputText()
    return(
        <>
        <div className="input-container" >
            <input className="input-task" placeholder="Enter your task..." onChange={setInputText}></input>
            <button className="input-btn">Add</button>
        </div>
        </>
    )
}

export default TodoInput