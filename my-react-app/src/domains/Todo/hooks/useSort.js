import { useContext } from "react"
import { TodoContext } from "../contexts"

const useSort = () => {
  const { dispatch } = useContext(TodoContext)
  const sortDirect = () => {
    dispatch({ type: "sort-direct" })
  }
  const sortReverse = () => {
    dispatch({ type: "sort-reverse" })
  }
  return { sortDirect, sortReverse }
}

export default useSort
