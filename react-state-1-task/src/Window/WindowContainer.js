import React, { useState } from "react";
import WindowText from "./WindowText";
function WindowContainer(props) {
  return (
    <div>
      <WindowText
        p1="Hello, subscribers. We will rock ya!"
        p2="Again? again? again!!!"
      />
    </div>
  );
}

export default WindowContainer;
