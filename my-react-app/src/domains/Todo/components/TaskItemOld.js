import React, { useContext, useState } from "react"
import useTodoActions from "../../../contexts/hooks/useTodoActions"
import { TodoContext } from "../../../contexts"
import { CloseOutlined } from "@ant-design/icons"
import { BsFlagFill } from "react-icons/bs"

const TaskItem = props => {
  const { task, taskId } = props
  console.log(task)
  const { deleteTask } = useTodoActions()
  const [isEditedTask, setIsEditedTask] = useState(false)
  const [editedTask, setEditedTask] = useState(task)
  console.log("useState(task): ", useState(task))
  const { state } = useContext(TodoContext)
  const [flagChecked, setFlagChecked] = useState("grey")
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
      {isEditedTask ? (
        <input
          className="task-input"
          autoFocus
          style={{
            cursor: "text",
            fontSize: "12px",
            padding: "2px",
            marginLeft: "24px",
          }}
          onChange={e => setEditedTask(e.currentTarget.value)}
          value={editedTask}
          onKeyDown={e => {
            if (e.key === "Enter") {
              setIsEditedTask(!isEditedTask)
              state.currentList.children.map(elem=> {
                  console.log("Boolean: ", elem.taskId===taskId, elem.taskId, taskId)
                  console.log("CurrentState: ", state.currentList)
                  if(elem.taskId===taskId){
                    elem.taskName = editedTask
                  }
            })
          }}}
        />
      ) : (
        <div
          id="taskId"
          className="task-text"
          onClick={e => setIsEditedTask(!isEditedTask)}>
          {editedTask}
        </div>
      )}
      <div style={{ display: "flex", marginLeft: "auto" }}>
        {flagChecked == "grey" ? (
          <BsFlagFill
            className="flag"
            style={{ color: `${flagChecked}` }}
            onClick={() => {
              setFlagChecked("orange")
            }}
          />
        ) : (
          <BsFlagFill
            className="flag"
            style={{ color: "orange" }}
            onClick={() => setFlagChecked("grey")}
          />
        )}
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
