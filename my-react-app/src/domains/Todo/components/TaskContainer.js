import React, { useContext } from "react"
import { TaskItem } from "."
import { TodoContext } from "../../../contexts"

const TaskContainer = () => {
  const { state } = useContext(TodoContext)
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {state.currentList.children.map((item, index) => {
              return <TaskItem task={item.taskName} taskId={item.taskId} key={index}  />
        })}
      </div>
    </>
  )
}

export default TaskContainer
