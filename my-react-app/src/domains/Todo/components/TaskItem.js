import React, { useContext } from "react"
import useTodoActions from "../hooks/useTodoActions"
import { TodoContext } from "../contexts"
import {Button, } from "antd"
import {SearchOutlined} from "@ant-design/icons"
const TaskItem = props => {
  const { task, taskId } = props
  const { editInput } = useContext(TodoContext)
  const { edit, deleteTask } = useTodoActions()
  return (
    <div className="display-todo">
      <input
        type="checkbox"
        // checked
        className="item-checkbox"
        id={taskId}></input>
      <label htmlFor={taskId}></label>
      {editInput ? (
        <div className="item-todo" contentEditable="true">
          {task}
        </div>
      ) : (
        <div className="item-todo" contentEditable="false">
          {task}
        </div>
      )}
      {/* <div className="item-todo">{task}</div> */}

      <button className="edit-item" onClick={edit}>
        &#10000;
      </button>
      {/* <Button shape="circle" icon={<SearchOutlined />} /> */}
      <button className="delete-btn" onClick={() => deleteTask(task, taskId)}>
        &times;
      </button>
    </div>
  )
}

export default TaskItem
