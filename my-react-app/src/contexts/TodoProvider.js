import React, { useState, useReducer } from "react"
import { TodoContext } from "."
import reducer from "./reducer/reducer"
const TodoProvider = ({ children }) => {
  const [display, setDisplay] = useState(false)
  const [displayList, setDisplayList] = useState(false)
  const [taskInput, setTaskInput] = useState(false)
  const [editInput, setEditInput] = useState(false)
  const [state, dispatch] = useReducer(reducer, { lists: [], currentList: [] })
  const [amount, setAmount] = useState()
  const [color, setColor] = useState()
  const [list, setList] = useState("")
  const [task, setTask] = useState("")
  const [chosenItem, setChosenItem] = useState("New List")
  const [editList, setEditList] = useState(false)
  const [flagAmount, setFlagAmount] = useState(false)
  return (
    <TodoContext.Provider
      value={{
        display,
        setDisplay,
        state,
        dispatch,
        list,
        setList,
        displayList,
        setDisplayList,
        chosenItem,
        setChosenItem,
        task,
        setTask,
        taskInput,
        setTaskInput,
        editInput,
        setEditInput,
        amount,
        setAmount,
        color,
        setColor,
        editList,
        setEditList,
        flagAmount,
        setFlagAmount,
      }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
