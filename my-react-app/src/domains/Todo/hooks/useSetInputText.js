import {useContext} from "react"
import TaskContext from "../contexts/TaskContext"
const useSetInputText=()=>{
    const {value, setValue} = useContext(TaskContext)
    const setInputText=(e)=>{
        setValue(e.target.value)
        console.log(value)
    }
    return {setInputText}
}

export default useSetInputText