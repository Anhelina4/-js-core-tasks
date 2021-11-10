import React, { useState, useEffect } from "react"

function TextItem(props) {
  const { text, setNumber, id, number} = props
  const [state, setState] = useState(false)
  const showText = () => {
    setNumber(id)
    setState(!state)
  }

  return (
    <>
      <button
        onClick={showText}
        style={{
          background: "#870544",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "8px",
          border: "1px solid white",
        }}>
        Show text
      </button>
      {state && id === number ? (
        <div style={{ borderBottom: "1px solid #c3c8d6" }}>{text}</div>
      ) : null}
    </>
  )
}

export default TextItem
