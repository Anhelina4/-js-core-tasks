import React from "react"

const Nav = (props) =>{
    const { href, key, name} = props
    
   return (
       <>
           <a key={key} href={href} style={{margin: "10px", textDecoration:"none", fontSize:"18px", color:"black"}}>{name}</a>
       </>
   )    
}

export default Nav