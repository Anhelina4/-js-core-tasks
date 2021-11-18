import {useContext} from "react"
import TodoContext from "../contexts/TodoContext"

const useTodoActions = (e) => {
  const {state, dispatch} = useContext(TodoContext)
  const {list, setList} = useContext(TodoContext)
  const addList=()=>{
    dispatch({type:"add-list", payload:[list, "1", [{}, {}]]})
    setList('')
  }
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      dispatch({type:"add-list", payload:[list, "1", [{}, {}]]})
      setList('')
    }
  }
  return {addList, setList, list, handleKeyDown}
}

export default useTodoActions
