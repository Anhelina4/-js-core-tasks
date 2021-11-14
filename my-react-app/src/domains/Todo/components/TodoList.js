import React, { useContext } from "react"
import TodoItem from "./TodoItem"
import TaskContext from "../contexts/TaskContext"
import useInputActions from "../hooks/useInputActions"
import "./style.css"
import { TodoInput } from "."
const TodoList = () => {
  const { state, tasks, value } = useContext(TaskContext)
  const { setInputText, setInputTasks, setDeleteTask } = useInputActions()
  return (
    <>
      {state ? (
        <div className="input-container">
          <TodoInput/>
              <div className="item-class">
                {tasks.map((item, index) => {
                  return (
                    <TodoItem
                      key={index}
                      inputText={item}
                      index={index}
                      onDelete={setDeleteTask}
                    />
                  )
                })}
              </div>
            </div>
      ) : null}
    </>
  )
}

export default TodoList
