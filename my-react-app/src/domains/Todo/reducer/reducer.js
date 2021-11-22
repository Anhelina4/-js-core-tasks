const reducer = (state, action) => {
  if (action.type === "add-list") {
    const newState = Object.assign({}, state)
    const {payload} = action
    newState.lists = [...newState.lists, {listName: payload.list, id: payload.id, children: payload.arr}]

    return newState
    
  }
  if(action.type === "add-task"){
    const newState = Object.assign({}, state)
    const {payload} = action
    newState.currentList.children = [...newState.currentList.children, {taskName: payload.task, taskId: payload.idTask}]
    console.log(newState)
    return newState
  }
  if(action.type === "delete-task"){
    const newState = Object.assign({}, state)
    const {payload} = action
    newState.currentList.children = state.currentList.children.filter((item)=>{
      return item.taskId !==payload.index
    })
    console.log(newState)
    return newState
  }
}

export default reducer
