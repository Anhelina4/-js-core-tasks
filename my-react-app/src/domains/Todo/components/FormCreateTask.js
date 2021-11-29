import React, { useContext } from "react"
import { Checkbox, Input, Tooltip } from "antd"
import { InfoCircleOutlined } from "@ant-design/icons"
import { TodoContext } from "../contexts"
import { useTodoActions } from "../hooks"
const FormCreateTask = () => {
  const { state, setTask, task} = useContext(TodoContext)
  const {addTask} = useTodoActions()
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <input type="checkbox" class="checkbox-round" id="checkbox" 
           value={task}/>
        <label for="checkbox"></label>
      <Input
        style={{ background: "white", marginLeft:"8px" }}
        placeholder="Enter your task"
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined
              style={{ color: "rgba(0,0,0,.45)", fontSize: "10px" }}
            />
          </Tooltip>
        }
        onChange={e => setTask(e.target.value)}
        onKeyDown={addTask}
        value={task}
        id="white-input"
      />
    </div>
  )
}

export default FormCreateTask
