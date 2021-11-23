import React, { useContext } from "react"
import { UnorderedListOutlined } from "@ant-design/icons"
import useTodoActions from "../hooks/useTodoActions"
import { TodoContext } from "../contexts"
import PropTypes from 'prop-types'; 
const ListItem = props => {
  const { listName, children, id } = props
  const { showListsTask } = useTodoActions()
  return (
    <div
      className="list-container display-spacebetw"
      children={children}
      id={id}
      onClick={() => showListsTask(id)}>
      <div className="display-center">
        <UnorderedListOutlined className="list-icon" />
        <div className="title-list ">{listName}</div>
      </div>
      <div className="title-list "></div>
    </div>
  )
}

ListItem.propTypes={
  listName: PropTypes.string.isRequired
}

export default ListItem
