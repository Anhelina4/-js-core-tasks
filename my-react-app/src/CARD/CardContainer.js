import React, { useState } from "react"
import CARD_ARR from "./CARD_ARR"
import CardItem from "./CardItem"
function CardContainer() {
  const [state, setState] = useState(2)
  const addCards = () => {
    console.log(state)
    return setState(state + 2)
  }
  return (
    <>
      <div>
        {CARD_ARR.map((item, id) => {
          return id < state ? <CardItem text={item.text} /> : null
        })}
      </div>
      {state < CARD_ARR.length ? (
        <button
          onClick={addCards}
          className="btn btn-secondary btn-sm"
          style={{ margin: "10px" }}>
          Show more
        </button>
      ) : null}
    </>
  )
}

export default CardContainer
