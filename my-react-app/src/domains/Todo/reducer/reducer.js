const reducer = (state, action) => {
  if (action.type === "add-list") {
    const newState = Object.assign([...state])
    console.log(newState)
    newState.push({
      listName: action.payload[0],
      id: action.payload[1],
      children: [],
    })
    return [...newState]
  }
  if(action.type==="add-task"){
    const newState = Object.assign([...state])
    newState.push({
      children: action.payload
    })
    return [...newState]
    
  }
}

export default reducer
