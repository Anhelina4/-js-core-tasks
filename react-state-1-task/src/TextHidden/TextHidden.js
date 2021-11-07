import React, {useState} from "react"

const TextHidden=()=>{
    const [state, setState] = useState("Hide")
    return(
        <>
        <button  onClick={()=>setState(state==="Hide" ? "Open" : "Hide")}>{state}</button>
        {state==="Hide"?
        <p style={{margin:" 30px 100px 100px 100px", border:"1px solid green", borderRadius:"5px"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    : null}
        
        </>
    )
}

export default TextHidden