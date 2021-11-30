import React, { useContext } from "react"
import TodoInput from "./TodoInput"
import CategoryContainer from "./CategoryContainer"
import { ListContainer } from "."
import { PlusCircleOutlined } from "@ant-design/icons"
import { useTodoActions } from "../../../contexts/hooks"

const TodoSidebar = () => {
  const { showForm } = useTodoActions()
  return (
    <div className="sidebar">
      <TodoInput />
      <CategoryContainer />
      <ListContainer />
      <button onClick={showForm} className="btn-add-primary">
        <PlusCircleOutlined
          style={{ height: "14px", width: "14px", marginRight: "8px" }}
        />
        New List
      </button>
    </div>
  )
}

export default TodoSidebar
