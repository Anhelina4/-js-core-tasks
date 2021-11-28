import React, { useState, useEffect, useContext } from "react"
import { UnorderedListOutlined } from "@ant-design/icons"
import useTodoActions from "../hooks/useTodoActions"
import PropTypes from "prop-types"
const ListItem = props => {
  const { listName, children, id } = props
  const { showListsTask } = useTodoActions()
  const { taskNumber } = props
  // const [taskAmount, setTaskAmount] = useState()
  // useEffect(() => {
  //   let sum = 0
  //   state.lists.map(item => {
  //     if(item.id === state.currentList.id){
  //       state.currentList.children.map(elem => {
  //         ++sum
  //       })
  //     }
  //   })
  //   setTaskAmount(sum)
  // }, [state])
  return (
    <div
      style={{ cursor: "pointer" }}
      className="list-container display-spacebetw"
      children={children}
      id={id}
      onClick={() => showListsTask(id)}>
      <div className="display-center">
        <UnorderedListOutlined className="list-icon" />
        <div className="title-list ">{listName}</div>
      </div>
      <div className="list-counter">0</div>
    </div>
  )
}

ListItem.propTypes = {
  listName: PropTypes.string.isRequired,
}

export default ListItem
