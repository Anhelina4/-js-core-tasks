import React, { useState } from "react"
const ScrollBarContainer = () => {
  const [state, setState] = useState(200)
  const add = () => {
    console.log(state)
    if (state < 800) {
      setState(state + 800 / 10)
    }
    if (state > 700) {
      setState(800)
    }
  }
  const remove = () => {
    if (state > 0) {
      setState(state - 800 / 10)
    }
    if (state < 40) {
      setState(0)
    }
  }
  const changeValue = e => {
    console.log(e.target.value)
    let newValue = (800 * e.target.value) / 100
    setState(newValue)
  }
  return (
    <>
      <div
        style={{
          width: "800px",
          height: "30px",
          background: "black",
          margin: "50px",
          borderRadius: "8px",
        }}>
        <div
          style={{
            width: `${state}px`,
            height: "30px",
            background: "#90abf0",
            borderRadius: "8px",
          }}></div>
      </div>
      <button onClick={add}>Add 10%</button>
      <button onClick={remove}>Remove 10%</button>
      <input placeholder="add number" onChange={changeValue}></input>
      {/* <button onClick={changeValue}>change value</button> */}
    </>
  )
}

export default ScrollBarContainer
