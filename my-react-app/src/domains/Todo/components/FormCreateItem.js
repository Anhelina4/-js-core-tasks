import React, { useContext } from "react"
import { TodoContext } from "../contexts"
import useTodoActions from "../hooks/useTodoActions"
import { PlusOutlined } from "@ant-design/icons"

const FormCreateItem = props => {
  const { addTask } = useTodoActions()
  const { chosenItem, color } = useContext(TodoContext)
  const { showTasks } = useTodoActions()

  return (
    // <div>
    //   {<div className="display-spacebetw">
    //     <h1 className="title-h1">{title}</h1>
    //     <button
    //       className="btn-plus-main"
    //       style={{ fontSize: "18px" }}
    //       onClick={showTaskInput}>
    //       &#10010;
    //     </button>
    //   </div>
    //   {taskInput ? (
    //     <div className="display-spacebetw ">
    //       <Form.Item label={label}>
    //         <div
    //           style={{
    //             width: "400px",
    //             justifyContent: "flex-start",
    //             display: "flex",
    //           }}>
    //           <Input
    //             onChange={e => setTask(e.target.value)}
    //             value={task}
    //           />
    //           <Button type="primary" onClick={addTask}>
    //             Submit
    //           </Button>
    //         </div>
    //       </Form.Item>
    //       <div className="display-start">
    //         <button className="ant-btn ant-btn-sm " onClick={sortDirect}>
    //           <SortAscendingOutlined />
    //         </button>
    //         <button className="ant-btn ant-btn-sm " onClick={sortReverse}>
    //           <SortDescendingOutlined />
    //         </button>
    //       </div>
    //     </div>
    //   ) : null} }
    // </div>
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="btn-plus2" onClick={showTasks}>
            <PlusOutlined />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 className="title-h1" style={{ color: `${color}` }}>
            {chosenItem}
          </h1>
          <h1
            className="title-h1"
            style={{ paddingRight: "3px", color: "rgb(148 147 147)" }}>
            0
          </h1>
        </div>

        <div
          className="display-spacebetw"
          style={{ padding: "8px 0px", borderBottom: "1px solid #c7c7c7" }}>
          <div className="display-spacebetw">
            <div style={{ fontSize: "12px" }}>0 done</div>
            <div
              className="text-main"
              style={{ marginLeft: "4px", color: `${color}` }}>
              {" "}
              &bull; Clear
            </div>
          </div>
          <div className="text-main" style={{ color: `${color}` }}>
            Show
          </div>
        </div>
      </div>
    </>
  )
}

export default FormCreateItem
