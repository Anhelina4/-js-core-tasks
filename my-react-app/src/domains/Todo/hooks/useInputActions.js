import { useContext } from "react"
import TaskContext from "../contexts/TaskContext"
const useInputActions = () => {
  const { value, setValue } = useContext(TaskContext)
  const { tasks, setTasks } = useContext(TaskContext)
  const setInputText = ({ target }) => {
    setValue(target.value)
  }
  const setInputTasks = () => {
    setTasks([...tasks, value])
    setValue("")
  }
  const setDeleteTask = (target, index) => {
    // console.log(index)
    // console.log(tasks)
    const changedArr = tasks.filter((item, id) => id !== index)
    setTasks(changedArr)
  }

  return { setInputText, setInputTasks, setDeleteTask }
}

export default useInputActions
