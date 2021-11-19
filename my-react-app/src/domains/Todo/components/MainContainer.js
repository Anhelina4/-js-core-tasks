import React from "react"
import { useContext } from "react"
import { FormCreateItem, ListItem } from "."
import { TodoContext } from "../contexts"
import { useTodoActions } from "../hooks"

const MainContainer = () => {
  const { state, displayList, display, chosenItem } = useContext(TodoContext)
  return (
    <div className="main-container">
      {displayList ? <FormCreateItem title={chosenItem} label="Task name: "/> : null}
    </div>
  )
}

export default MainContainer
