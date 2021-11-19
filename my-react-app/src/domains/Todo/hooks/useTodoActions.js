import { useContext } from "react"
import { FormCreateItem } from "../components"
import TodoContext from "../contexts/TodoContext"
import { v4 as uuidv4 } from 'uuid';

const useTodoActions = e => {
  const id = uuidv4();
  const { state, dispatch, list, setList, displayList, setDisplayList, setDisplay, display, chosenItem, setChosenItem } = useContext(TodoContext)
  const showForm = () => {
    setDisplay(!display)
    setDisplayList(false)
  }
  const addList = () => {
    
    dispatch({ type: "add-list", payload: [list, id, [{}, {}]] })
    setList("")
    
  }
  const handleKeyDownList = e => {
    if (e.key === "Enter") {
      dispatch({ type: "add-list", payload: [list, id, [{}, {}]] })
      setList("")
    }
  }
  const showList=(e)=>{
    setChosenItem(e.target.innerHTML)
    setDisplayList(true)
    setDisplay(false)
  }
  return { addList, setList, list, handleKeyDownList, showList, showForm}
}

export default useTodoActions
