import React, { useContext, useEffect } from "react"
// import { CalendarOutlined } from "@ant-design/icons"
import { RedEnvelopeOutlined } from "@ant-design/icons"
import { FlagOutlined } from "@ant-design/icons"
import { BsCalendarMinus, BsCalendar2Event, BsFillInboxFill, BsFlagFill } from "react-icons/bs";
import { TodoCategory } from "."
import { TodoContext } from "../contexts"

const CategoryContainer = () => {
  const icon1 = <BsCalendarMinus style={{fill: "white"}}/>
  const icon2 = <BsCalendar2Event  style={{fill: "white"}}/>
  const icon3 = <BsFillInboxFill  style={{fill: "white"}}/>
  const icon4 = <BsFlagFill  style={{fill: "white"}}/>
  const { state, amount, setAmount } = useContext(TodoContext)
  useEffect(() => {
    let sum = 0
    state.lists.map(item => {
      item.children.map(elem => {
        ++sum
      })
    })
    setAmount(sum)
  }, [state])
  return (
    <>
      <div className="display-spacebetw" style={{marginBottom:"12px"}}>
        <TodoCategory
          icon={icon1}
          iconColor="#287bff"
          text="Today"
          clas="category-style"
          amount="0"
        />
        <TodoCategory
          icon={icon2}
          iconColor="#fa1f02"
          text="Scheduled"
          clas="category-style"
          amount="0"
        />
      </div>
      <div className="display-spacebetw" style={{marginBottom:"6px"}}>
        <TodoCategory
          icon={icon3}
          iconColor="#595150"
          text="All"
          clas="category-style"
          amount={amount}
        />
        <TodoCategory
          icon={icon4}
          iconColor="#e5a502"
          text="With flag"
          clas="category-style"
          amount="0"
        />
      </div>
    </>
  )
}

export default CategoryContainer
