import React from "react"
import { useContext } from "react"
import { FormCreateItem } from "."
import { TodoContext } from "../contexts"
import TaskContainer from "./TaskContainer"
import { FormCreateTask } from "."

const MainContainer = () => {
  const { state } = useContext(TodoContext)
  return (
    <div className="main-container">
      <FormCreateItem />
      {state.currentList.children  ? (
        <div className="div-scrollbar-main">
          <TaskContainer />
        </div>
      ) : (
        <div
          className="div-scrollbar-main"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#636262",
            fontSize: "20px",
          }}>
          No reminders
        </div>
      )}
    </div>
  )
}

export default MainContainer
