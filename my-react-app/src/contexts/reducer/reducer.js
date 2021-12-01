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
        isFlagged: "false",
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
              isFlagged: "false",
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
    console.log(newState)

    return newState
  }
  if (action.type === "rename-task") {
    const newState = { ...state }
    const { payload } = action

    console.log(payload)
    newState.currentList.children = newState.currentList.children.map(item => {
      console.log("taskid:", item.taskId)
      console.log("taskId from payload:", payload.taskId)
      console.log("NameOld:", item.taskName)
      console.log("NameNew:", payload.newTask)
      return item.taskId === payload.taskId
        ? {...item, taskName: payload.newTask} : {...item}
    })
    return {...newState}
  }
}

export default reducer
