import React, { useContext } from "react"
import { ListItem } from "."
import { useTodoActions } from "../hooks"
import { TodoContext } from "../contexts"

const ListContainer = () => {
  const { state } = useContext(TodoContext)
  const { handleKeyDownList, editListItem } = useTodoActions()
  const { display, setList, list } = useContext(TodoContext)

  return (
    <div>
      <h3 className="title-sm">My Lists</h3>
      <div className="sidebar-list-container">
        {state.lists.map((item, id) => {
          return (
            <ListItem
              listName={item.listName}
              key={id}
              id={item.id}
              children={item.children}
              change={() => editListItem(item.id)}
            />
          )
        })}
        {display ? (
          <div className="display-center">
            <input
              className="input-lg"
              onChange={e => setList(e.target.value)}
              onKeyDown={handleKeyDownList}
              value={list}></input>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ListContainer
