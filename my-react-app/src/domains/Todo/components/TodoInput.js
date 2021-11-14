import { useContext } from "react"
import TaskContext from "../contexts/TaskContext"
import useInputActions from "../hooks/useInputActions"

const TodoInput = () => {
  const { value } = useContext(TaskContext)
  const {
    setInputTasks,
    setInputText,
    setDeleteAll,
    setSelectAll,
    handleKeyDown,
    setDirectSort,
    setReverseSort,
  } = useInputActions()
  return (
    <div style={{ display: "flex", padding: " 0 4px" }}>
      <input
        type="text"
        value={value}
        className="input-task"
        placeholder="Enter your task..."
        onChange={setInputText}
        onKeyDown={handleKeyDown}></input>
      <button className="input-btn" onClick={setInputTasks}>
        Add
      </button>
      <button className="input-btn-secondary" onClick={setDeleteAll}>
        Delete all
      </button>
      <button className="input-btn-secondary" onClick={setSelectAll}>
        Select all
      </button>
      <button className="input-btn-sort" onClick={setDirectSort}>
        Sort A-Z
      </button>
      <button className="input-btn-sort" onClick={setReverseSort}>
        Sort Z-A
      </button>
    </div>
  )
}
export default TodoInput
