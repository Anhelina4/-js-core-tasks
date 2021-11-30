import React, { useContext } from "react"
import { useTodoActions } from "../hooks"
import { TodoContext } from "../contexts"
import { UnorderedListOutlined, CloseOutlined } from "@ant-design/icons"

const ListItem = props => {
  const { listName, children, id } = props
  const { showListsTask, deleteList, editListItem } = useTodoActions()
  const { change } = props
  const { editList, list, setList } = useContext(TodoContext)
  return (
    <>
      {!editList ? (
        <div
          style={{ cursor: "pointer" }}
          className="list-container display-spacebetween"
          children={children}
          id={id}
          onClick={() => showListsTask(id)}>
          <div className="display-center">
            <UnorderedListOutlined className="list-icon" />
            <div className="text-sm " onClick={change}>
              {listName}
            </div>
          </div>
          <div>
            <CloseOutlined
              className="btn-delete"
              onClick={() => deleteList(id)}
            />
          </div>
        </div>
      ) : (
        <div
          style={{ cursor: "pointer" }}
          className="list-container display-spacebetween"
          children={children}
          id={id}
          onClick={() => showListsTask(id)}>
          <div className="display-center">
            <UnorderedListOutlined className="list-icon" />
            <input
              autoFocus
              style={{ cursor: "text", fontSize: "12px" }}
              onChange={e => setList(e.target.value)}
              value={list}
              onClick={() => editListItem(id)}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ListItem
