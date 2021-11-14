import React, { useState } from "react"
import "./App.css"
import TodoCard from "./domains/Todo/components/TodoCard"
import TaskContext from "./domains/Todo/contexts/TaskContext"
function App() {
  const [state, setState] = useState(false)
  const [value, setValue] = useState("")
  const [tasks, setTasks] = useState([])
  return (
    <TaskContext.Provider
      value={{ state, setState, value, setValue, tasks, setTasks }}>
      <div className="App">
        <TodoCard />
      </div>
    </TaskContext.Provider>
  )
}

export default App
