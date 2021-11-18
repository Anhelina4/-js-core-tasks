import React, {useContext} from "react"
import { CalendarOutlined } from "@ant-design/icons"
import { CalendarTwoTone } from "@ant-design/icons"
import { RedEnvelopeTwoTone } from "@ant-design/icons"
import { FlagOutlined } from "@ant-design/icons"
import { TodoCategory } from "."
import { TodoContext } from "../contexts"
const CategoryContainer = () => {
    const {state} = useContext(TodoContext);
  const icon1 = <CalendarOutlined />
  const icon2 = <CalendarTwoTone />
  const icon3 = <RedEnvelopeTwoTone />
  const icon4 = <FlagOutlined />
  return (
    <>
      <div className="display-spacebetw" style={{ margin: " 8px 19px" }}>
        <TodoCategory icon={icon1} text="Today" clas="category-style2" amount="0" />
        <TodoCategory icon={icon2} text="Scheduled" clas="category-style" amount="0"/>
      </div>
      <div className="display-spacebetw" style={{ margin: "8px  19px" }}>
        <TodoCategory icon={icon3} text="All" clas="category-style" amount={state.length}/>
        <TodoCategory icon={icon4} text="With flag" clas="category-style2" amount="0"/>
      </div>
    </>
  )
}

export default CategoryContainer
