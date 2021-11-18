import React, { useContext } from "react"
import { PlusCircleOutlined } from "@ant-design/icons"
import { ListItem } from "."
import useShowForm from "../hooks/useShowForm"
import TodoContext from "../contexts/TodoContext"
const ListContainer = () => {
  const { showForm } = useShowForm()
  const { state, dispatch } = useContext(TodoContext)
  return (
    <div>
      <h3 className="title-mylists">My Lists</h3>
      <div  className="div-scrollbar">
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
      </div>
      <div className="like-footer">
        <button className="btn-plus" onClick={showForm}>
          <PlusCircleOutlined style={{height:"18px", width:"18px"}}/>
        </button>
        <div onClick={showForm} style={{ cursor: "default" }}>
          New List
        </div>
      </div>
    </div>
  )
}

export default ListContainer
