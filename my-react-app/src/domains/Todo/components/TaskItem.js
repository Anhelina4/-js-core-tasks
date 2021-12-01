import React, { useContext, useState } from "react"
import useTodoActions from "../../../contexts/hooks/useTodoActions"
import { TodoContext } from "../../../contexts"
import { CloseOutlined } from "@ant-design/icons"
import { BsFlagFill } from "react-icons/bs"

const TaskItem = props => {
  const { task, taskId } = props
  console.log(task)
  const { deleteTask } = useTodoActions()
  const { state, dispatch} = useContext(TodoContext)
  const [change, setChange] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [isChecked, setIsChecked] = useState(true)
  const [isFlagged, setIsFlagged] = useState(true)
  
  return (
    <div className="task-item">
      <div style={{ position: "relative" }} onClick={()=>dispatch({type:"set-checked", payload:{taskId, isChecked}})}>
        {!isChecked ? <><input
          className="checkbox-round"
          type="checkbox"
          id={taskId}
          value={task}
          onClick={()=>{
            setIsChecked(!isChecked)
          }}
        />
        <label htmlFor={taskId}></label></>:<><input
        className="checkbox-round-unchecked"
        type="checkbox"
        id={taskId}
        value={task}
        onClick={()=>{
          setIsChecked(!isChecked)
        }}
      /><label htmlFor={taskId}></label></>}
      </div>
      {change ? (
        <>
          <input
          style={{marginLeft:"30px"}}
            autoFocus
            onClick={() => {
              setChange(!change)
            }}
            onChange={e => setNewTask(e.target.value)}
            value={newTask}
            onKeyDown={(e)=>{
              if(e.key === "Enter"){
                dispatch({type:"rename-task", payload:{newTask, taskId}})
                setChange(false)
              }
            }}
          />
        </>
      ) : (
        <div
          className="task-text"
          onClick={() => {
            setChange(!change)
          }}>
          {task}
        </div>
      )}

      <div style={{ display: "flex", marginLeft: "auto" }}>
        <div onClick={()=>dispatch({type:"set-flagged", payload:{taskId, isFlagged}})}>
        {isFlagged ? <BsFlagFill className="flag" style={{color:"grey"}} onClick={()=>setIsFlagged(!isFlagged)}/>: <BsFlagFill className="flag" style={{color:"orange"}} onClick={()=>setIsFlagged(!isFlagged)}/>}
        </div>
        <CloseOutlined
          className="btn-delete"
          style={{ margin: "0px" }}
          onClick={() => deleteTask(taskId)}
        />
      </div>
    </div>
  )
}

export default TaskItem
