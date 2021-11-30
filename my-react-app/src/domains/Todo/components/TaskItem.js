import React, { useContext } from "react"
import useTodoActions from "../hooks/useTodoActions"
import { TodoContext } from "../contexts"
import { CloseOutlined } from "@ant-design/icons"
import { BsFlagFill } from "react-icons/bs"

const TaskItem = props => {
  const { task, taskId } = props
  const { deleteTask, makeFlagged } = useTodoActions()
  return (
    <>
      <div>
        <input
          className="checkbox-round"
          type="checkbox"
          id={taskId}
          value={task}
        />
        <label htmlFor={taskId}></label>
      </div>
      <div className="task-item">
        <div id="taskId" className="task-text">
          {task}
        </div>
        <div style={{ display: "flex" }}>
          <BsFlagFill className="flag" onClick={() => makeFlagged(taskId)} />
          <CloseOutlined
            className="btn-delete"
            style={{ margin: "0px" }}
            onClick={() => deleteTask(taskId)}
          />
        </div>
      </div>
    </>
  )
}

export default TaskItem
