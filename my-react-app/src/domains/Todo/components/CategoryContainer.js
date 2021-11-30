import React, { useContext, useEffect } from "react"
import { TodoCategory } from "."
import { TodoContext } from "../../../contexts"
import {
  BsCalendarMinus,
  BsCalendar2Event,
  BsFillInboxFill,
  BsFlagFill,
} from "react-icons/bs"

const CategoryContainer = () => {
  const icon1 = <BsCalendarMinus style={{ fill: "white" }} />
  const icon2 = <BsCalendar2Event style={{ fill: "white" }} />
  const icon3 = <BsFillInboxFill style={{ fill: "white" }} />
  const icon4 = <BsFlagFill style={{ fill: "white" }} />
  const { state, amount, setAmount } = useContext(TodoContext)
  let sum = 0
  useEffect(() => {
    state.lists.map(item => {
      sum +=item.children.length
    })
    setAmount(sum)
  }, [state, state.currentList ])

  return (
    <>
      <div className="display-spacebetween" style={{ marginBottom: "12px" }}>
        <TodoCategory
          icon={icon1}
          iconColor="#1b9dc4"
          text="Today"
          clas="category"
          amount="0"
        />
        <TodoCategory
          icon={icon2}
          iconColor="#fa1f02"
          text="Scheduled"
          clas="category"
          amount="0"
        />
      </div>
      <div className="display-spacebetween" style={{ marginBottom: "6px" }}>
        <TodoCategory
          icon={icon3}
          iconColor="#595150"
          text="All"
          clas="category"
          amount={amount}
        />
        <TodoCategory
          icon={icon4}
          iconColor="#e5a502"
          text="With flag"
          clas="category"
          amount="0"
        />
      </div>
    </>
  )
}

export default CategoryContainer
