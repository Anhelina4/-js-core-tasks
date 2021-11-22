const reducer = (state, action) => {
  if (action.type === "add-list") {
    const newState = Object.assign({}, state)
    console.log(newState)
    const {payload} = action
    newState.lists.push({listName: payload.list, id: payload.id})
    console.log(newState)
    return newState
    
  }
}

export default reducer
