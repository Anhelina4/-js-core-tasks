import React, { useContext, useState } from "react"
import useTodoActions from "../../../contexts/hooks/useTodoActions"
import { TodoContext } from "../../../contexts"
import { CloseOutlined } from "@ant-design/icons"
import { BsFlagFill } from "react-icons/bs"

const TaskItem = props => {
  const { task, taskId } = props
  console.log(task)
  const { deleteTask } = useTodoActions()
  const { state, dispatch } = useContext(TodoContext)
  const [change, setChange] = useState(false)
  const [newTask, setNewTask] = useState("")

  
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <div style={{ position: "relative" }}>
        <input
          className="checkbox-round"
          type="checkbox"
          id={taskId}
          value={task}
        />
        <label htmlFor={taskId}></label>
      </div>
      {change ? (
        <>
          <input
          style={{marginLeft:"30px"}}
            autoFocus
            onClick={() => {
              setChange(!change)
            }}
            onChange={e => setNewTask(e.target.value)}
            value={newTask}
            onKeyDown={(e)=>{
              if(e.key === "Enter"){
                dispatch({type:"rename-task", payload:{newTask, taskId}})
                setChange(false)
              }
            }}
          />
        </>
      ) : (
        <div
          className="task-text"
          onClick={() => {
            setChange(!change)
          }}>
          {task}
        </div>
      )}

      <div style={{ display: "flex", marginLeft: "auto" }}>
        <BsFlagFill className="flag" />
        <CloseOutlined
          className="btn-delete"
          style={{ margin: "0px" }}
          onClick={() => deleteTask(taskId)}
        />
      </div>
    </div>
  )
}

export default TaskItem
