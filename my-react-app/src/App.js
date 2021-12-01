import React, { useState, useReducer } from "react"
import "./App.css"
import "./styles/style.css"
import { AppLayout } from "./components/AppLayout"
import { TodoProvider } from "./contexts"

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <AppLayout />
      </TodoProvider>
    </div>
  )
}

export default App
