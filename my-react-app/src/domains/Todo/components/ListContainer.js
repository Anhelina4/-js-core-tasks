import React, { useContext } from "react"
import { PlusCircleOutlined } from "@ant-design/icons"
import { ListItem } from "."
import useTodoActions from "../hooks/useTodoActions"
import TodoContext from "../contexts/TodoContext"

const ListContainer = () => {
  const { showForm, handleKeyDownList } = useTodoActions()
  const { state, display, setList, list } = useContext(TodoContext)
  return (
    <div>
      <h3 className="title-mylists">My Lists</h3>
      <div className="div-scrollbar">
      {state.map((item, id) => {
          return (
            <ListItem
              listName={item.listName}  
              childAmount={item.children.length}
              key={id}
              id={item.id}
              children={item.children}
            />
          )
        })}
        {display ? <div className="display-center"><input className="list-input" onChange={e => setList(e.target.value)} onKeyDown={handleKeyDownList} value={list}></input></div>:null}
        
      </div>
      <div className="like-footer">
        <button className="btn-plus" onClick={showForm}>
          <PlusCircleOutlined style={{ height: "18px", width: "18px" }} />
        </button>
        <div onClick={showForm} style={{ cursor: "default" }}>
          New List
        </div>
      </div>
    </div>
  )
}

export default ListContainer
