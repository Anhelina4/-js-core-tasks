const reducer = (state, action) => {
  if (action.type === "add-list") {
    const newState = [...state]
    console.log(newState)
    newState.push({
      listName: action.payload[0],
      id: action.payload[1],
      children: [],
    })
    return [...newState]
  }
  if(action.type==="add-task"){
    const newState = [...state]
    return [...newState, newState[0].children.push(action.payload)]
    
  }
}

export default reducer
