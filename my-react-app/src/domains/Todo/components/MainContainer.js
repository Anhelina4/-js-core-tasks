import React from "react"
import { useContext } from "react"
import { FormCreateItem } from "."
import { TodoContext } from "../../../contexts"
import TaskContainer from "../../Task/components/TaskContainer"

const MainContainer = () => {
  const { state } = useContext(TodoContext)
  return (
    <div className="main-container">
      <FormCreateItem />
      { state.currentList.children!==undefined && Object.entries(state.currentList.children).length!==0   ? (
        <div className="main-list-container">
          <TaskContainer />
        </div>
      ) : (
        <div
          className="main-list-container"
          style={{
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
