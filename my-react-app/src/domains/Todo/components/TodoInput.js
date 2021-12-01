import React, { useContext, useState } from "react"
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { TodoContext } from "../../../contexts"

const TodoInput = props => {
  const { dispatch } = useContext(TodoContext)
  const [search, setSearch] = useState()
  // console.log(search)
  return (
    <div className="display-center" style={{ marginBottom: "12px" }}>
      <Input
        size="small"
        placeholder="Search"
        prefix={<SearchOutlined />}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            dispatch({ type: "search", payload: search })
          }
        }}
      />
    </div>
  )
}

export default TodoInput
