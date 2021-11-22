import React, { useContext } from "react"
import { Form, Input, Button } from "antd"
import { TodoContext } from "../contexts"
import useTodoActions from "../hooks/useTodoActions"

const FormCreateItem = (props) => {
  const { addTask } = useTodoActions()
  const {  task, setTask, taskInput } = useContext(TodoContext)
  const {showTaskInput} = useTodoActions()
  const {title, label} = props
  return (
    <div>
      <div className="display-spacebetw">
      <h1 className="title-h1">{title}</h1>
      <button className="btn-plus-main title-h1" style={{fontSize: "18px"}} onClick={showTaskInput}>&#10010;</button>
      </div>
      {taskInput ?  <Form.Item label={label}>
        <div
          style={{
            width: "400px",
            justifyContent: "flex-start",
            display: "flex",
          }}>
          <Input
            onChange={e => setTask(e.target.value)}
            value={task}
          />
          <Button type="primary" onClick={addTask}>
            Submit
          </Button>
        </div>
      </Form.Item> : null}
    </div>
  )
}

export default FormCreateItem
