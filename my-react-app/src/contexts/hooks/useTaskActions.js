import React, { useContext } from "react"
import TodoContext from "../TodoContext"
import { v4 as uuidv4 } from "uuid"

const useTaskActions = () => {
  const idTask = uuidv4()
  const { state, dispatch, setTask, flagged, setFlagged, task } =
    useContext(TodoContext)
  const addTask = e => {
    if (task !== "" && e.key === "Enter") {
      dispatch({ type: "add-task", payload: { task, idTask } })
      setTask("")
    }
  }
  const deleteTask = index => {
    dispatch({ type: "delete-task", payload: { TaskId: index } })
  }
  const makeFlagged = id => {
    state.currentList.children.map(item => {
      if (item.taskId === id) {
        setFlagged(!flagged)
      }
    })
  }

  return { addTask, deleteTask, makeFlagged }
}

export default useTaskActions
