import React, { useState } from "react";
const items = ["apples", "oranges", "bananas"];
function DropContainer(props) {
    const [state, setState] = useState(false)
    const [active, setActive] = useState(false)
    const [id, setId] = useState()
  const { btnName } = props;
  const makeActive=(e)=>{
    setActive(!active)
    setId(e.target.innerHTML)
  }
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={()=>setState(!state)}
        style={{
          border: "1px solid grey",
          backgroundColor: "grey",
          color: "white",
          
        }}
      >
        {btnName}
      </button>
      <div style={{ border: "1px solid grey", borderRadius: "3px" }}>
        {state ? Object.values(items).map((item) => {
          return   active && id == item  ? <div style={{textDecoration:"underline"}} onClick={makeActive}>{item}</div> : <div style={{textDecoration:"none"}} onClick={makeActive}>{item}</div>;
        }):null}
      </div>
    </div>
  );
}

export default DropContainer;