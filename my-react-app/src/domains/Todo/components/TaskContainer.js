import React, {useContext} from 'react'
import { TaskItem } from '.'
import { TodoContext } from '../contexts'
const TaskContainer = () => {
    const {state} = useContext(TodoContext)
    return (
        <div>
            {state.currentList.children.map(item=>
                <TaskItem task = {item.taskName}/>
                )}
        </div>
    )
}

export default TaskContainer
