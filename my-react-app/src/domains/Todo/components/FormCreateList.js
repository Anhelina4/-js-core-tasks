import React, {useContext} from "react"
import { Form, Input, Button } from "antd"
import useTodoActions from "../hooks/useTodoActions"
import { TodoContext } from "../contexts"
const FormCreateList = () => {
    const {addList, setList, handleKeyDown} = useTodoActions()
    const {list} = useContext(TodoContext)
  return (
    <div>
      <h1 className="title-h1">Create List</h1>
      <Form.Item label="List name">
        <div
          style={{
            width: "400px",
            justifyContent: "flex-start",
            display: "flex",
          }}
          >
          <Input  onChange={(e)=>setList(e.target.value)}  onKeyDown={handleKeyDown} value={list}/>
          <Button type="primary" onClick={addList} >Submit</Button>
        </div>
      </Form.Item>
    </div>
  )
}

export default FormCreateList
