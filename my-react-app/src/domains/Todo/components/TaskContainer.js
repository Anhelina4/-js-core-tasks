import React, { useContext } from "react"
import { TaskItem } from "."
import { TodoContext } from "../../../contexts"

const TaskContainer = () => {
  const { state } = useContext(TodoContext)
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {state.currentList.children.map((item, index) => {
              return (<>
                {item.listName ? <div className="list-text">{item.listName}</div> : null}
                {typeof(item) === "string" ? <div className="list-text">{item}</div> : <TaskItem task={item.taskName} taskId={item.taskId} key={index}  />}
                
                </>)
        })}
      </div>
    </>
  )
} 

export default TaskContainer
