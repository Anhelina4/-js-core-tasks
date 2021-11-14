import { useContext } from "react"
import TaskContext from "../contexts/TaskContext"

const useInputActions = () => {
  const { value, setValue } = useContext(TaskContext)
  const { tasks, setTasks } = useContext(TaskContext)
  const { all, setAll } = useContext(TaskContext)
  const { edit, setEdit } = useContext(TaskContext)
  const { state, setState } = useContext(TaskContext)
  const { newvalue, setNewValue } = useContext(TaskContext)

    const showInput = () => {
      setState(true)
    }
  const setInputText = e => {
    setValue(e.target.value)
  }
  const setInputTasks = () => {
    setTasks([...tasks, value])
    setValue("")
  }
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setTasks([...tasks, value])
      setValue("")
    }
  }
  const setDeleteTask = (target, index) => {
    const changedArr = tasks.filter((item, id) => id !== index)
    setTasks(changedArr)
  }
  const setDeleteAll = () => {
    setTasks([])
    setAll(false)
    setValue("")
  }
  const setSelectAll = () => {
    setAll(!all)
  }
  const setDirectSort = () => {
    let directSort = [...tasks].sort()
    setTasks(directSort)
  }
  const setReverseSort = () => {
    let reverseSort = [...tasks].reverse()
    setTasks(reverseSort)
  }
  const setEditItem = index => {
    console.log(index)
    tasks.map((item, id) => setEdit(true))
  }
  // const onEditChange = e => {
  //   setNewValue(e.target.value)
  // }
  // const handleChangeInput = e => {
  //   if (e.key === "Enter") {
  //     setEditItem(false)
  //   }
  // }
  const handleEditSubmit = e => {
    if (e.key === "Enter") {
      setEdit(false)
    }
  }
  return {
    showInput,
    setInputText,
    setInputTasks,
    setDeleteTask,
    setDeleteAll,
    setSelectAll,
    handleKeyDown,
    setDirectSort,
    setReverseSort,
    // onEditChange,
    setEditItem,
    // handleChangeInput,
    handleEditSubmit,
  }
}

export default useInputActions
