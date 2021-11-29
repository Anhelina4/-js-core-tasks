import React, { useContext } from "react"
import { TaskItem } from "."
import { TodoContext } from "../contexts"
import {FormCreateTask} from "../components"
const TaskContainer = () => {
  const { state, taskInput, task } = useContext(TodoContext)
  console.log(state.currentList.children.length)
  return (
    <>
      <div style={{display:"flex", flexDirection:"column"}}>
        {state.currentList.children
          ? state.currentList.children.map(item => (
              <TaskItem task={item.taskName} taskId={item.taskId} />
            ))
          : null}
      </div>
    </>
  )
}

export default TaskContainer
