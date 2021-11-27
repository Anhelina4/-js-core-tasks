import React from "react"
import {SearchOutlined} from "@ant-design/icons"
import { Input } from "antd"
import "../../../index.css"
const TodoInput = () => {
  return (
    <div className="display-center" style={{marginBottom:"12px"}}>
      <Input size="small" placeholder="Search" prefix={<SearchOutlined />} />
    </div>
  )
}

export default TodoInput
