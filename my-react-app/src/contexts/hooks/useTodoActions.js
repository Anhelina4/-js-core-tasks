import { useContext } from "react"
import TodoContext from "../TodoContext"
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
    setColor,flagged, setFlagged
  } = useContext(TodoContext)

  const showForm = e => {
    setDisplay(!display)
  }
  const showTasks = () => {
    setTaskInput(!taskInput)
  }
  const handleKeyDownList = e => {
    if (e.key === "Enter" && list !== "") {
      dispatch({ type: "add-list", payload: { list, id, arr: [] } })
      setList("")
    }
  }
  const showListsTask = (id) => {
    console.log(id)
    state.lists.filter(item => {
      if (item.id === id) {
        setChosenItem(item.listName)
        setDisplayList(true)
        setColor("#1b9dc4")
        state.currentList = item;
        console.log(state)
        return state
      }
    })
  }
  const addTask = (e) => {
    if (task !== "" && e.key==="Enter") {
      dispatch({ type: "add-task", payload: { task, idTask  } })
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
  const deleteTask=(index)=>{
    dispatch({type:"delete-task", payload:{TaskId:index}})
  }
  const makeFlagged=(id)=>{
   state.currentList.children.map(item=>{
     if (item.taskId === id){
       setFlagged(!flagged)
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
    makeFlagged
  }
}

export default useTodoActions
