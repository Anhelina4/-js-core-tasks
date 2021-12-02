import React from "react"
import "./styles/style.css"
import { AppLayout } from "./components"
import { TodoProvider } from "./contexts"

function App() {
  return (
      <TodoProvider>
        <AppLayout />
      </TodoProvider>
  )
}

export default App
