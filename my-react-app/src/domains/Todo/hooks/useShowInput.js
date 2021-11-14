import { useContext } from "react"
import TaskContext from "../contexts/TaskContext"
const useShowInput = () => {
  const { state, setState } = useContext(TaskContext)
  const showInput = () => {
    setState(true)
  }
  return { showInput }
}

export default useShowInput
