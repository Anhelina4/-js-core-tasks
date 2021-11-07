import React, { useState } from "react";
import DropItem from "./DropItem";
const items = ["apples", "oranges", "bananas"];
function DropContainer(props) {
    const [state, setState] = useState(false)
  const { btnName } = props;
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
          return <DropItem value={item} />;
        }):null}
      </div>
    </div>
  );
}

export default DropContainer;
