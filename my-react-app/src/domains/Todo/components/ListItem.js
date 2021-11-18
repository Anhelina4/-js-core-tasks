import React from "react"
import { UnorderedListOutlined } from "@ant-design/icons"
const ListItem = (props) => {
    const {listName, id, children, childAmount} = props
  return (
    <div className="list-container display-spacebetw" id={id} children={children}>
      <div className="display-center">
        <UnorderedListOutlined className="list-icon" />
        <div className="title-list ">{listName}</div>
      </div>
      <div className="title-list ">{childAmount}</div>
    </div>

  )
}

export default ListItem
