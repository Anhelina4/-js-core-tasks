import React from "react"

const Alert=(props)=>{
    const {classes, value} = props
    return(
        <>
        <div className={classes} style={{padding:"20px", margin:"20px", borderRadius:"3px"}}>{value}</div>
        </>
    )
}

export default Alert