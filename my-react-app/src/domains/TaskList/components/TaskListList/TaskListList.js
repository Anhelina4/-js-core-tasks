import React, { useContext } from "react"
import TaskListSimpleView from "../TaskListSimpleView"
import { useListActions } from "../../../../contexts/hooks"
import { TodoContext } from "../../../../contexts"

const TaskListList = () => {
  const { state } = useContext(TodoContext)
  const { handleKeyDownList } = useListActions()
  const { display, setList, list } = useContext(TodoContext)

  return (
    <>
      <h3 className="title-sm">My Lists</h3>
      <div className="sidebar-list-container">
        {state.lists.map((item, id) => {
          return (
            <TaskListSimpleView
              listName={item.listName}
              key={id}
              id={item.id}
              children={item.children}
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
    </>
  )
}

export default TaskListList
