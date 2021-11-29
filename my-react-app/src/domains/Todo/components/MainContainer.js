import React from "react"
import { useContext } from "react"
import { FormCreateItem } from "."
import { TodoContext } from "../contexts"
import TaskContainer from "./TaskContainer"
import { FormCreateTask } from "."

const MainContainer = () => {
  const { state } = useContext(TodoContext)
  let childrenAmount = 0
  if (
    state.currentList.children === undefined ||
    state.currentList.children === null
  ) {
    childrenAmount = 0
  } else {
    childrenAmount = state.currentList.children.length
  }
  console.log(childrenAmount)
  return (
    <div className="main-container">
      <FormCreateItem />
      {state.currentList.children && childrenAmount !== 0 ? (
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
            fontFamily: "Consolas",
          }}>
          No reminders
        </div>
      )}
    </div>
  )
}

export default MainContainer
