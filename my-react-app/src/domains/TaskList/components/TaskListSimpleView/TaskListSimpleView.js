import React, { useContext, useState } from "react"
import { useTodoActions } from "../../../../contexts/hooks"
import { TodoContext } from "../../../../contexts"
import { UnorderedListOutlined, CloseOutlined } from "@ant-design/icons"

const TaskListSimpleView = props => {
  const { listName, children, id } = props
  const { showListsTask, deleteList } = useTodoActions()
  const [isEditedList, setIsEditedList] = useState(false)
  const [editedList, setEditedList] = useState(listName)
  const {setChosenItem, state, dispatch} = useContext(TodoContext)
  return (
    <>
        <div
          style={{ cursor: "pointer" }}
          className="list-container display-spacebetween"
          children={children}
          id={id}
          onClick={()=> showListsTask(id)}>
          <div className="display-center">
            <UnorderedListOutlined className="list-icon" />
            {
              isEditedList ? <input
              autoFocus
              style={{ cursor: "text", fontSize: "12px" }}
              onChange={e => setEditedList(e.currentTarget.value)}
              value={editedList}
              onKeyDown={(e) => {
                if(e.key == 'Enter') {
                  setIsEditedList(!isEditedList) 
                  dispatch({type:"rename-list", payload:{editedList, id}})
                }
              }}/> : <div className="text-sm ">
              <span onClick={() => setIsEditedList(!isEditedList)}>{editedList}</span>
            </div>
            }
            
          </div>
          <div>
            <CloseOutlined
              className="btn-delete"
              onClick={() => {deleteList(id)
              }}
            />
          </div>
        </div>
    </>
  )
}

export default TaskListSimpleView
