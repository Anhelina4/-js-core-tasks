import React from "react"
import { useContext } from "react"
import { FormCreateItem } from "."
import { TodoContext } from "../contexts"
import TaskContainer from "./TaskContainer"

const MainContainer = () => {
  const { displayList, chosenItem } = useContext(TodoContext)
  return (
    <div className="main-container">
      {displayList ? (
        <FormCreateItem title={chosenItem} label="Task name: " />
      ) : null}

      <TaskContainer />
    </div>
  )
}

export default MainContainer
