import { useContext } from "react"
import { FormCreateItem } from "../components"
import TodoContext from "../contexts/TodoContext"
import { v4 as uuidv4 } from "uuid"

const useTodoActions = (e, props) => {
  const id = uuidv4()
  const idTask = uuidv4()
  const {
    state,
    dispatch,
    list,
    setList,
    displayList,
    setDisplayList,
    setDisplay,
    display,
    chosenItem,
    setChosenItem,
    task,
    setTask,
    taskInput,
    setTaskInput,
  } = useContext(TodoContext)
  const showForm = () => {
    setDisplay(!display)
    setDisplayList(false)
  }
  const showTaskInput = () => {
    setTaskInput(!taskInput)
  }
  const handleKeyDownList = e => {
    if (e.key === "Enter" && list !== "") {
      // console.log('event obj', e)
      dispatch({ type: "add-list", payload: { list, id, arr: [] } })
      setList("")
    }
  }
  const showListsTask = id => {
    console.log(id)
    // console.log(state)
    state.lists.filter(item => {
      if (item.id === id) {
        setChosenItem(item.listName)
        setDisplayList(true)
        state.currentList = item
      }
    })
  }
  const addTask = e => {
    // if()
    dispatch({ type: "add-task", payload: { task, idTask } })
    setTask("")
  }
  return { setList, list, handleKeyDownList, showForm, showListsTask, addTask, showTaskInput }
}

export default useTodoActions
