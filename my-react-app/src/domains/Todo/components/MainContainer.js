import React from "react"
import { useContext } from "react"
import { FormCreateItem, ListItem } from "."
import { TodoContext } from "../contexts"
import { useTodoActions } from "../hooks"
import TaskContainer from "./TaskContainer"
const MainContainer = () => {
  const { state, displayList, display, chosenItem } = useContext(TodoContext)
  return (
    <div className="main-container">
      {displayList ? <FormCreateItem title={chosenItem} label="Task name: "/> : null}
      {/* {state.lists.map(item=>{
        return <div>{item.child}</div>
      })} */}
      <TaskContainer/>
    </div>
  )
}

export default MainContainer
