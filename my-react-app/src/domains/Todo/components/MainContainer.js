import React from 'react'
import { FormCreateList } from '.'
import { useShowForm } from '../hooks'
const MainContainer = () => {
    const {display} = useShowForm()
    return (
        <div className="main-container">
            {display ? <FormCreateList/> : null}
        </div>
    )
}

export default MainContainer
