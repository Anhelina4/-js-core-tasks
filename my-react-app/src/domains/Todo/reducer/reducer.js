const reducer = (state, action) => {
  if (action.type === "add-list") {
    const newState = Object.assign({}, state)
    const {payload} = action
    newState.lists = [...newState.lists, {listName: payload.list, id: payload.id}]
    
    return newState
    
  }
}

export default reducer
