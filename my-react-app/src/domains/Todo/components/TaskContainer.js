import React, { useContext } from "react"
import { TaskItem } from "."
import { TodoContext } from "../contexts"

const TaskContainer = () => {
  const { state } = useContext(TodoContext)

  return (
    <div style={{ margin: "6px" }} className="div-scrollbar-main">
      {state.currentList.children
        ? state.currentList.children.map(item => (
            <TaskItem task={item.taskName} taskId={item.taskId} />
          ))
        : null}
    </div>
  )
}

export default TaskContainer
