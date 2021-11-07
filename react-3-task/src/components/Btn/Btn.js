import React from "react"

const Btn=(props)=>{
    const {value, type, classes, href, getType} = props
    let button=<button></button>
    if(getType === "btn"){
        button = <button className={classes} type={type}>{value}</button>;
    }else if(getType === "link"){
        button = <a href = {href}>{value}</a>
    }
    return(
        <div>
        {button}
        </div>
        
    )
}

export default Btn