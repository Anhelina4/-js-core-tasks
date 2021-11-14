import React, { useContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TaskContext from "../contexts/TaskContext"
import useInputActions from "../hooks/useInputActions"
import "./style.css"

const TodoItem = props => {
  const { inputText, onDelete, index } = props
  const { all, edit } = useContext(TaskContext)
  const itemId = uuidv4()
  const { setEditItem, handleEditSubmit } = useInputActions()
  return (
    <div className="display-todo">
      {all ? (
        <>
          <input
            type="checkbox"
            checked
            className="item-checkbox"
            id={itemId}></input>
        </>
      ) : (
        <input type="checkbox" className="item-checkbox" id={itemId}></input>
      )}
      <label htmlFor={itemId}></label>
      {edit && !all ? (
        <div
          className="item-todo"
          contentEditable="true"
          onKeyDown={handleEditSubmit}>
          {inputText}
        </div>
      ) : (
        <div className="item-todo">{inputText}</div>
      )}
      <button className="edit-item" onClick={() => setEditItem(index)}>
        &#10000;
      </button>
      <button onClick={() => onDelete(inputText, index)} className="delete-btn">
        &times;
      </button>
    </div>
  )
}

export default TodoItem
