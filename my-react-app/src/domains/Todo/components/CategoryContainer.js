import React, { useContext, useEffect } from "react"
import { TodoCategory } from "."
import { useNavigate } from "react-router-dom"
import { TodoContext } from "../../../contexts"
import {
  BsCalendarMinus,
  BsCalendar2Event,
  BsFillInboxFill,
  BsFlagFill,
} from "react-icons/bs"

const CategoryContainer = () => {
  let navigate = useNavigate()
  const icon1 = <BsCalendarMinus style={{ fill: "white" }} />
  const icon2 = <BsCalendar2Event style={{ fill: "white" }} />
  const icon3 = <BsFillInboxFill style={{ fill: "white" }} />
  const icon4 = <BsFlagFill style={{ fill: "white" }} />
  const { state, amount, setAmount, dispatch, flagAmount, setFlagAmount } =
    useContext(TodoContext)
  let sum = 0
  let flaggedSum = 0
  useEffect(() => {
    state.lists.map(item => {
      sum += item.children.length
      item.children.map(elem => {
        if (elem.isFlagged === true) {
          ++flaggedSum
        }
      })
    })
    setAmount(sum)
    setFlagAmount(flaggedSum)
  }, [state, state.currentList])
  return (
    <>
      <div className="display-spacebetween" style={{ marginBottom: "12px" }}>
        <TodoCategory
          icon={icon1}
          iconColor="#1b9dc4"
          text="Today"
          clas="category"
          amount="0"
          // showCategory={()=>{dispatch({type:"today-tasks"})
          showCategory={()=>{
            navigate("/today")}}
        />
        <TodoCategory
          icon={icon2}
          iconColor="#fa1f02"
          text="Scheduled"
          clas="category"
          amount="5"
          showCategory={()=>{
            navigate("/scheduled")}}
        />
      </div>
      <div className="display-spacebetween" style={{ marginBottom: "6px" }}>
        <TodoCategory
          icon={icon3}
          iconColor="#595150"
          text="All"
          clas="category"
          amount={amount}
          // showCategory={() => {
          //   dispatch({ type: "all-tasks" })
          // }}
          showCategory={()=>{
            navigate("/all")}}
        />
        <TodoCategory
          icon={icon4}
          iconColor="#e5a502"
          text="With flag"
          clas="category"
          amount={flagAmount}
          // showCategory={() => {
          //   dispatch({ type: "flagged-tasks" })
          // }}
          showCategory={()=>{
            navigate("/flagged")}}
        />
      </div>
    </>
  )
}

export default CategoryContainer
