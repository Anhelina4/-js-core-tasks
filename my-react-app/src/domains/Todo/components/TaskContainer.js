import React, { useContext } from "react"
import { TaskItem } from "."
import { TodoContext } from "../contexts"

const TaskContainer = () => {
  const { state } = useContext(TodoContext)
  console.log(state.currentList.children.length)
  return (
    <>
      <div className="div-scrollbar-main">
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
