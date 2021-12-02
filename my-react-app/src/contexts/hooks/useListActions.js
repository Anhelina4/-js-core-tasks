import React, { useContext } from "react"
import TodoContext from "../TodoContext"
import { v4 as uuidv4 } from "uuid"

const useListActions = () => {
    const id = uuidv4()
    const {state, dispatch, list, setList, setEditList, editList} = useContext(TodoContext)
    const handleKeyDownList = e => {
        if (e.key === "Enter" && list !== "") {
          dispatch({ type: "add-list", payload: { list, id, arr: [] } })
          setList("")
        }
      }
      const deleteList=(index)=>{
        dispatch({type:"delete-list", payload:{index:index}})
        
    }
    const editListItem=(id)=>{
        console.log(id)
        state.lists.map(item=>{
         if(item.id === id){
           setEditList(!editList)
         }
         if(item.id !== id){
          setEditList(false)
         }
        })
      }
    return {handleKeyDownList, deleteList, editListItem}
}

export default useListActions
