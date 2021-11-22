import React, { useContext } from "react"
import useTodoActions from "../hooks/useTodoActions"
import { TodoContext } from "../contexts"
const TaskItem = props => {
  const { task, taskId } = props
  const { state } = useContext(TodoContext)
  return (
    <div className="display-todo">
      <input
        type="checkbox"
        // checked
        className="item-checkbox"
        id={taskId}></input>
      <label></label>
      <div className="item-todo" contentEditable="true">{task}</div>
      {/* <div className="item-todo">{task}</div> */}
      <button className="edit-item">&#10000;</button>
      <button className="delete-btn">&times;</button>
    </div>
  )
}

export default TaskItem
