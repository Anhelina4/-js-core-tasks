const reducer = (state, action) => {
  
    if(action.type === "add-list"){
      const newState = state;
      console.log(newState)
      newState.push({listName: action.payload[0], id:action.payload[1], children:action.payload[2]})
      return [...newState]
    }
    
  }

export default reducer
