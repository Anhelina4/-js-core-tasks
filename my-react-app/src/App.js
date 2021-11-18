import React, {useState, useReducer} from "react"
import "./App.css"
import reducer from "./domains/Todo/reducer/reducer"
import TodoContext from "./domains/Todo/contexts/TodoContext"
import { TodoSidebar } from "./domains/Todo/components"
import { MainContainer } from "./domains/Todo/components"
function App() {
  const [display, setDisplay] = useState(false)
  const [state, dispatch] = useReducer(reducer, [])
  const [list, setList] = useState("")
  return (
    <TodoContext.Provider value={{ display, setDisplay, state, dispatch, list, setList }}>
      <div className="App">
        <TodoSidebar />
        <MainContainer className="main-container" />
      </div>
    </TodoContext.Provider>
  )
}

export default App
