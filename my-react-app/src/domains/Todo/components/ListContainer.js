import React, { useContext } from "react"
import { ListItem } from "."
import useTodoActions from "../hooks/useTodoActions"
import TodoContext from "../contexts/TodoContext"

const ListContainer = () => {
  const { state } = useContext(TodoContext)
  const { handleKeyDownList, editListItem } = useTodoActions()
  const { display, setList, list } = useContext(TodoContext)

  return (
    <div>
      <h3 className="title-mylists">My Lists</h3>
      <div className="div-scrollbar">
        {state.lists.map((item, id) => {
          return (
            <ListItem
              listName={item.listName}
              key={id}
              id={item.id}
              children={item.children}
              change = {()=>editListItem(item.id)}
            />
          )
        })}
        {display ? (
          <div className="display-center">
            <input
              className="list-input"
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
