import React, { useContext } from "react"
import { TodoContext } from "../contexts"
import { useTodoActions } from "../hooks"
import { PlusOutlined } from "@ant-design/icons"
import { FormCreateTask } from "."

const FormCreateItem = props => {
  const { chosenItem, color, taskInput } = useContext(TodoContext)
  const { showTasks } = useTodoActions()

  return (
    <>
      <div>
        <div className="display-end">
          <div className="btn-add-secondary" onClick={showTasks}>
            <PlusOutlined />
          </div>
        </div>
        <div className="display-spacebetween">
          <h1 className="title-lg" style={{ color: `${color}` }}>
            {chosenItem}
          </h1>
          <h1 className="title-lg">0</h1>
        </div>

        <div
          className="display-spacebetween"
          style={{ padding: "8px 0px", borderBottom: "1px solid #c7c7c7" }}>
          <div className="display-spacebetween">
            <div style={{ fontSize: "12px" }}>0 done</div>
            <div
              className="text-sm-thin"
              style={{ marginLeft: "4px", color: `${color}` }}>
              {" "}
              &bull; Clear
            </div>
          </div>
          <div className="text-sm-thin" style={{ color: `${color}` }}>
            Show
          </div>
        </div>
      </div>

      <div>{taskInput ? <FormCreateTask /> : null}</div>
    </>
  )
}

export default FormCreateItem
