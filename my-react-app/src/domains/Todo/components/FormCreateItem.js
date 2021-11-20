import React, { useContext } from "react"
import { Form, Input, Button } from "antd"
import { TodoContext } from "../contexts"
import useTodoActions from "../hooks/useTodoActions"

const FormCreateItem = (props) => {
  const { addList, setList, handleKeyDownList } = useTodoActions()
  const { list, listName, state, task, setTask } = useContext(TodoContext)
  const {title, label} = props
  return (
    <div>
      <h1 className="title-h1">{title}</h1>
      <Form.Item label={label}>
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
          <Button type="primary">
            Submit
          </Button>
        </div>
      </Form.Item>
    </div>
  )
}

export default FormCreateItem
