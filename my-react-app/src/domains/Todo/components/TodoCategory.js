import React, { useContext } from "react"
import { TodoContext } from "../../../contexts"

function TodoCategory(props) {
  const { icon, text, clas, amount, iconColor, showCategory } = props
  const { setChosenItem, setColor } = useContext(TodoContext)
  return (
    <div onClick={showCategory}>
    <div
      className={clas}
      style={{ cursor: "pointer" }}
      onClick={() => setColor(iconColor)}>
      <div onClick={() => setChosenItem(text)}>
        <div className="category-icon">
          <div
            className="category-icon-background"
            style={{ background: `${iconColor}` }}>
            {icon}
          </div>
          <div className="task-counter">{amount}</div>
        </div>
        <div className="text-sm-align">{text}</div>
      </div>
    </div>
    </div>
  )
}

export default TodoCategory
