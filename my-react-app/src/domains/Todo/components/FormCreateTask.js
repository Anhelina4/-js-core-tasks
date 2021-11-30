import React, { useContext } from "react"
import { TodoContext } from "../../../contexts"
import { useTodoActions } from "../../../contexts/hooks"
import { Input, Tooltip } from "antd"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { InfoCircleOutlined } from "@ant-design/icons"

const FormCreateTask = () => {
  const { setTask, task } = useContext(TodoContext)
  const { addTask } = useTodoActions()
  return (
    <div className="display-center">
      <BsFillPlusCircleFill style={{ marginLeft: "2px", fill: "grey" }} />
      <Input
        style={{ background: "white", marginLeft: "4px" }}
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
