import React from "react"

function TodoCategory(props) {
  const { icon, text, clas, amount, iconColor } = props
  return (
    <div className={clas} >
      <div className="container-icons">
        <div className="icon-back"  style={{background:`${iconColor}`}}>{icon}</div>
        <div className="amount-counter">{amount}</div>
      </div>
      <div className="container-text">
        {text}
      </div>
    </div>
  )
}

export default TodoCategory
