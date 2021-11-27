import { useContext } from "react"
import TodoContext from "../contexts/TodoContext"
import { v4 as uuidv4 } from "uuid"
import { useKeyPress } from '@umijs/hooks';
const useTodoActions = () => {
  const id = uuidv4()
  const idTask = uuidv4()
  const {
    state,
    dispatch,
    list,
    setList,
    setDisplayList,
    setDisplay,
    display,
    setChosenItem,
    task,
    setTask,
    taskInput,
    setTaskInput,
    editInput,
    setEditInput,
  } = useContext(TodoContext)

  const showForm = (e) => {
    setDisplay(!display)
    // setDisplayList(false)
  }
  const showTaskInput = () => {
    setTaskInput(!taskInput)
  }
  const edit = () => {
    setEditInput(!editInput)
  }
  const deleteTask = (item, index) => {
    dispatch({ type: "delete-task", payload: { item, index } })
  }
  const handleKeyDownList = e => {
    if (e.key === "Enter" && list !== "") {
      dispatch({ type: "add-list", payload: { list, id, arr:[]} })
      setList("")
    }
  }
  const showListsTask = id => {
    state.lists.filter(item => {
      if (item.id === id) {
        setChosenItem(item.listName)
        setDisplayList(true)
        state.currentList = item
      }
    })
  }
  const addTask = () => {
    if (task !== "") {
      dispatch({ type: "add-task", payload: { task, idTask } })
      setTask("")
    }
    
  }
  return {
    setList,
    list,
    handleKeyDownList,
    showForm,
    showListsTask,
    addTask,
    showTaskInput,
    edit,
    deleteTask,
  }
}

export default useTodoActions
