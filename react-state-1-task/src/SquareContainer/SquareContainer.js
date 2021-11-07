import React, { useState } from "react";
import Square from "../Square/Square";
function SquareContainer(props) {
  const [green, setGreen] = useState(true);
  return (
    <div style={{ margin: "10px", display: "flex" }}>
      {green ? (
        <>
          <Square color="green" setColor={() => setGreen(!green)} />
          <Square color="transparent"></Square>
        </>
      ) : (
        <>
         <Square color="transparent" />
         <Square color="red" setColor={() => setGreen(!green)} />
          
        </>
      )}

      <Square color="blue" />
    </div>
  );
}

export default SquareContainer;
