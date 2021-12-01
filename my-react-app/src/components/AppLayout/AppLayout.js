import React from "react"
import { TodoSidebar } from "../../domains/Todo/components"
import { MainContainer } from "../../domains/Todo/components"
const AppLayout = () => {
  return (
    <>
      <TodoSidebar />
      <MainContainer className="main-container" />
    </>
  )
}

export default AppLayout
