import React, { useContext, useState } from "react"
import TodoList from "./TodoList"
import TaskContext from "../contexts/TaskContext"
import { useShowInput } from "../hooks"
import "./style.css"
const TodoCard = () => {
  const { state, setState } = useContext(TaskContext)
  const { showInput } = useShowInput()
  return (
    <div>
      <h1>
        Today{" "}
        <span className="date-time">{new Date().toLocaleDateString()}</span>
      </h1>
      {!state ? (
        <button className="todo-item" onClick={showInput}>
          <svg className="svg-class">
            <path
              className="svg-path"
              d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path>
          </svg>
          Add task
        </button>
      ) : null}
      <TodoList />
    </div>
  )
}

export default TodoCard
