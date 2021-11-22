import React, {useContext} from 'react'
import useTodoActions from "../hooks/useTodoActions"
import { TodoContext } from "../contexts"
const TaskItem = (props) => {
    const {task} = props
    const {state} = useContext(TodoContext)
    return (
        <div>
            {task}
        </div>
    )
}

export default TaskItem
