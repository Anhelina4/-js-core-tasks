import React from "react"
import "./style.css"
import { uuid } from 'uuidv4';

const TodoItem = props => {
  const { inputText, onDelete, index, onEdit } = props
  const itemId = uuid()
  return (
    <div className="display-todo">
      <input type="checkbox" className="item-checkbox"  id={itemId}></input>
      <label for={itemId}></label>
      <div className="item-todo">{inputText}</div>
      <button className="edit-item" onClick={()=>onEdit(inputText)}>&#10000;</button>
      <button onClick={()=>onDelete(inputText, index)} className="delete-btn">
        &times;
      </button>
    </div>
  )
}

export default TodoItem
