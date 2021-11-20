import React, {useContext} from "react"
import { UnorderedListOutlined } from "@ant-design/icons"
import useTodoActions from "../hooks/useTodoActions"
import { TodoContext } from "../contexts"

const ListItem = props => {
  const {state} = useContext(TodoContext)
  const { listName, children, childAmount, id  } = props
  const {showListsTask}  = useTodoActions()
  return (
    <div
      className="list-container display-spacebetw"
      children={children}
      id={id}
      onClick={()=>showListsTask(id)}
      >
      <div className="display-center">
        <UnorderedListOutlined className="list-icon" />
        <div className="title-list ">{listName}</div>
      </div>
      <div className="title-list ">{childAmount}</div>
    </div>
  )
}

export default ListItem
