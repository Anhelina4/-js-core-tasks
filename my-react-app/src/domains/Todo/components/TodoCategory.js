import React from "react"

function TodoCategory(props) {
  const { icon, text, clas, amount } = props
  return (
    <div className={clas}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "6px",
        }}>
        <div>{icon}</div>
        <div>{amount}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "6px",
        }}>
        {text}
      </div>
    </div>
  )
}

export default TodoCategory
