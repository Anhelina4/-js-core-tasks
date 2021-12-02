import React from "react"
import { Search } from "../../components"
import { CategoryContainer } from "../../domains/Todo/components"
import TaskListList from "../../domains/TaskList/components/TaskListList"
import { PlusCircleOutlined} from "@ant-design/icons"
import { useTodoActions} from "../../../src/contexts/hooks"

const Sidebar = () => {
  const { showForm } = useTodoActions()
  return (
      <>
      <Search />
      {/* Fix me! */}
      <CategoryContainer />
      <TaskListList />
      <button onClick={showForm} className="btn-add-primary">
        <PlusCircleOutlined
          style={{ height: "14px", width: "14px", marginRight: "8px" }}
        />
        New List
      </button>
      </>
  )
}

export default Sidebar
