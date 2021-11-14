import { useContext } from "react"
import TaskContext from "../contexts/TaskContext"
import useInputActions from "../hooks/useInputActions"
const TodoInput = () => {
    const {value} = useContext(TaskContext)
    const {setInputTasks, setInputText} = useInputActions()
  return (
    <div style={{display:"flex", padding:" 0 4px"}}>
      <input
        value={value}
        className="input-task"
        placeholder="Enter your task..."
        onChange={setInputText}></input>
      <button className="input-btn" onClick={setInputTasks}>
        Add
      </button>
    </div>
  )
}
export default TodoInput
