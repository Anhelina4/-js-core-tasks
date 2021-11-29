import React, { useState, useEffect, useContext } from "react"
import { UnorderedListOutlined, CloseOutlined } from "@ant-design/icons"
import useTodoActions from "../hooks/useTodoActions"
import PropTypes from "prop-types"
import { TodoContext } from "../contexts"
const ListItem = props => {
  const { listName, children, id } = props
  const {
    showListsTask,
    deleteList,
    editListItem
  } = useTodoActions()
  const { taskNumber, changeList, change } = props
  const { editList, setEditList, list, setList } = useContext(TodoContext)
  return (
    <>
      {!editList ? (
        <div
          style={{ cursor: "pointer" }}
          className="list-container display-spacebetw"
          children={children}
          id={id}
          onClick={() => showListsTask(id)}>
          <div className="display-center">
            <UnorderedListOutlined className="list-icon" />
            <div className="title-list " 
              onClick={change}>
              {listName}
            </div>
          </div>
          <div className="list-counter">
            <CloseOutlined
              className="btn-close"
              onClick={() => deleteList(id)}
            />
          </div>
        </div>
      ) : (
        <div
          style={{ cursor: "pointer" }}
          className="list-container display-spacebetw"
          children={children}
          id={id}
          onClick={() => showListsTask(id)}>
          <div className="display-center" >
            <UnorderedListOutlined className="list-icon" />
            <input
              autoFocus
              style={{ cursor: "text", fontSize: "12px" }}
              onChange={e => setList(e.target.value)}
              value={list}
              onClick={()=>editListItem(id)}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ListItem
