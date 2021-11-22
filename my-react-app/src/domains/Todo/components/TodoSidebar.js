import React, { useContext } from "react"
import TodoInput from "./TodoInput"
import CategoryContainer from "./CategoryContainer"
import { ListContainer } from "."
import { ListItem } from "."
import "../../../index.css"
import { TodoContext } from "../contexts"

const TodoSidebar = () => {
  return (
    <div className="todo-sidebar">
      <TodoInput />
      <CategoryContainer />
      <ListContainer />
    </div>
  )
}

export default TodoSidebar
