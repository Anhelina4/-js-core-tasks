const reducer = (state, action) => {
  if (action.type === "add-list") {
    const newState = JSON.parse(JSON.stringify(state))
    const { payload } = action
    newState.lists = [
      ...newState.lists,
      { listName: payload.list, id: payload.id, children: payload.arr },
    ]
    return { ...newState }
  }
  if (action.type === "add-task") {
    console.log("Add task")
    const newState = JSON.parse(JSON.stringify(state))
    const { payload } = action
    newState.currentList.children = [
      ...newState.currentList.children,
      {
        taskName: payload.task,
        taskId: payload.idTask,
        parentId: newState.currentList.id,
        isFlagged: false,
        isChecked: false,
      },
    ]
    newState.lists.map(item => {
      return item.id === newState.currentList.id
        ? (item.children = [
            ...item.children,
            {
              taskName: payload.task,
              taskId: payload.idTask,
              parentId: newState.currentList.id,
              isFlagged: false,
              isChecked: false
            },
          ])
        : null
    })
    console.log(newState)
    return { ...newState }
  }
  if (action.type === "delete-task") {
    const newState = { ...state }
    const { payload } = action
    newState.currentList.children = state.currentList.children.filter(item => {
      return item.taskId !== payload.TaskId
    })
    console.log(newState)
    return { ...newState }
  }
  if (action.type === "delete-list") {
    const newState = { ...state }
    const { payload } = action
    newState.lists = state.lists.filter(item => {
      return item.id !== payload.index
    })
    newState.currentList = {}
    console.log(newState)

    return newState
  }
  if (action.type === "rename-task") {
    const newState = { ...state }
    const { payload } = action

    console.log(payload)
    newState.currentList.children = newState.currentList.children.map(item => {
      // console.log("taskid:", item.taskId)
      // console.log("taskId from payload:", payload.taskId)
      // console.log("NameOld:", item.taskName)
      // console.log("NameNew:", payload.newTask)
      return item.taskId === payload.taskId
        ? {...item, taskName: payload.newTask} : {...item}
    })
    return {...newState}
  }
  if(action.type === "set-checked") {
    const newState = { ...state }
    const { payload } = action
    console.log(payload)
    newState.currentList.children = newState.currentList.children.map(item=>{
      // console.log(item)
      return item.taskId === payload.taskId ? {...item, isChecked: payload.isChecked}: {...item}
    })
    // newState.lists.map(item=>{
    //   // console.log("listId:", item.id)
    //   // console.log("currentId", newState.currentList.id)
    //   console.log(payload)
    //   console.log(item)
    //   console.log(newState.currentList)
    //   const changedItem = newState.lists.find(item => item.id === newState.currentList.id)
    //   console.log("find changed item from lists", changedItem)
    //   const index = newState.lists.indexOf(changedItem)
    //   console.log(index);
    //   newState.lists[index] = newState.currentList

    //   return {...newState}
    // })
    return {...newState}
  }
  if(action.type === "set-flagged"){
    const newState = {...state}
    const {payload} = action
    newState.currentList.children = newState.currentList.children.map(item=>{
      return item.taskId === payload.taskId ? {...item, isFlagged: payload.isFlagged} : {...item}
    })
    return {...newState}
  }
  if(action.type === "today-tasks"){
    const newState = {...state}
    const {payload} = action
    newState.currentList = {id:"Today-mocked", listName:"Today", children:[
      {isChecked: false, isFlagged: true, parentId: "Today-mocked", taskId:"1", taskName:"Buy some medicine"},
      {isChecked: true, isFlagged: true, parentId: "Today-mocked", taskId:"2", taskName:"Go for a stroll with the dog"},
      {isChecked: true, isFlagged: true, parentId: "Today-mocked", taskId:"3", taskName:"Buy wine and bread"},
      {isChecked: false, isFlagged: true, parentId: "Today-mocked", taskId:"4", taskName:"Call to the chef"},
      {isChecked: true, isFlagged: true, parentId: "Today-mocked", taskId:"5", taskName:"Cry"}
    ]}
    return {...newState}
  }
  if(action.type === "scheduled-tasks"){
    const newState = {...state}
    const {payload} = action
    newState.currentList = {listName:"Scheduled"};
    return {...newState}
  }
  if(action.type === "all-tasks"){
    const newState = {...state}
    const {payload} = action
    newState.currentList = {listName:"All"};
    return {...newState}
  }
  if(action.type === "flagged-tasks"){
    const newState = {...state}
    const {payload} = action
    newState.currentList = {listName:"With flagg"};
    return {...newState}
  }
}

export default reducer
