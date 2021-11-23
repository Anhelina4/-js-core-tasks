import React, { useContext } from "react"
import { Form, Input, Button } from "antd"
import { TodoContext } from "../contexts"
import useTodoActions from "../hooks/useTodoActions"
import { useSort } from "../hooks"
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons"
import { useKeyPress } from "@umijs/hooks"

const FormCreateItem = props => {
  const { addTask } = useTodoActions()
  const { task, setTask, taskInput, idTask, dispatch } = useContext(TodoContext)
  const { showTaskInput, useKeyPress } = useTodoActions()
  const { title, label } = props
  const { sortDirect, sortReverse } = useSort()
  const handlekey = useKeyPress("enter", event => {
    dispatch({ type: "add-task", payload: { task, idTask } })
  })
  return (
    <div>
      <div className="display-spacebetw">
        <h1 className="title-h1">{title}</h1>
        <button
          className="btn-plus-main"
          style={{ fontSize: "18px" }}
          onClick={showTaskInput}>
          &#10010;
        </button>
      </div>
      {taskInput ? (
        <div className="display-spacebetw ">
          <Form.Item label={label}>
            <div
              style={{
                width: "400px",
                justifyContent: "flex-start",
                display: "flex",
              }}>
              <Input
                onKeyDown={handlekey}
                onChange={e => setTask(e.target.value)}
                value={task}
              />
              <Button type="primary" onClick={addTask}>
                Submit
              </Button>
            </div>
          </Form.Item>
          <div className="display-start">
            <button className="ant-btn ant-btn-sm " onClick={sortDirect}>
              <SortAscendingOutlined />
            </button>
            <button className="ant-btn ant-btn-sm " onClick={sortReverse}>
              <SortDescendingOutlined />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default FormCreateItem
