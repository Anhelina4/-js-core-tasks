import {useContext} from "react"
import TodoContext from "../contexts/TodoContext"
const useShowForm = () => {
   const {display, setDisplay} = useContext(TodoContext)
   const showForm=()=>{
       setDisplay(!display)
   }
   return {showForm, display}
}

export default useShowForm
