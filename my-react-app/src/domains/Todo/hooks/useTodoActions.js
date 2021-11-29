import { useContext } from "react"
import TodoContext from "../contexts/TodoContext"
import { v4 as uuidv4 } from "uuid"

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
    editList, 
    setEditList,
    color,
    setColor,
  } = useContext(TodoContext)

  const showForm = e => {
    setDisplay(!display)
  }
  const showTasks = () => {
    setTaskInput(!taskInput)
  }
  const deleteTask = (item, index) => {
    dispatch({ type: "delete-task", payload: { item, index } })
  }
  const handleKeyDownList = e => {
    if (e.key === "Enter" && list !== "") {
      dispatch({ type: "add-list", payload: { list, id, arr: [] } })
      setList("")
    }
  }
  const showListsTask = id => {
    state.lists.filter(item => {
      if (item.id === id) {
        setChosenItem(item.listName)
        setDisplayList(true)
        setColor("#1b9dc4")
        state.currentList = item;
      }
    })
  }
  const addTask = (e) => {
    if (task !== "" && e.key==="Enter") {
      dispatch({ type: "add-task", payload: { task, idTask } })
      setTask("")
    }

  }
  const deleteList=(index)=>{
      dispatch({type:"delete-list", payload:{index:index}})
  }
  const editListItem=(id)=>{
    console.log(id)
    state.lists.map(item=>{
     if(item.id === id){
       setEditList(!editList)
     }
     if(item.id !== id){
      setEditList(false)
     }
    })
  }
  return {
    setList,
    list,
    handleKeyDownList,
    showForm,
    showListsTask,
    addTask,
    showTasks,
    editListItem,
    deleteTask,
    deleteList,
  }
}

export default useTodoActions
