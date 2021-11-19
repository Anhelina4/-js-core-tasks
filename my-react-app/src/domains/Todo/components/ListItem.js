import React from "react"
import { UnorderedListOutlined } from "@ant-design/icons"
import useTodoActions from "../hooks/useTodoActions"

const ListItem = props => {
  const { listName, id, children, childAmount } = props
  const {showList} = useTodoActions()
  return (
    <div
      className="list-container display-spacebetw"
      id={id}
      children={children}
      >
      <div className="display-center">
        <UnorderedListOutlined className="list-icon" />
        <div className="title-list " onClick={showList}>{listName}</div>
      </div>
      <div className="title-list ">{childAmount}</div>
    </div>
  )
}

export default ListItem
