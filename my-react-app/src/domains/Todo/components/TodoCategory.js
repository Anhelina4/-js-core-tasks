import React, { useContext } from "react"
import { TodoContext } from "../contexts"

function TodoCategory(props) {
  const { icon, text, clas, amount, iconColor } = props
  const { setChosenItem, setColor } = useContext(TodoContext)
  return (
    <div
      className={clas}
      style={{ cursor: "pointer" }}
      onClick={() => setColor(iconColor)}>
      <div onClick={() => setChosenItem(text)}>
        <div className="container-icons">
          <div className="icon-back" style={{ background: `${iconColor}` }}>
            {icon}
          </div>
          <div className="amount-counter">{amount}</div>
        </div>
        <div className="container-text">{text}</div>
      </div>
    </div>
  )
}

export default TodoCategory
