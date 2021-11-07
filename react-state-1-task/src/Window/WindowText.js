import React, { useState } from "react";
import { ReactDOM } from "react";

function WindowText(props) {
  const [visible, setVisible] = useState(false);
  const { p1, p2 } = props;
  const pCut = p1.split(".").slice(0, 1).join("").concat(".");
  const p2Cut = p1.split(".").slice(1, p1.length).join("").concat(".");
  console.log(pCut);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      {visible ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="first" style={{ margin: "0" }}>
              {p1}
            </p>
          </div>
          <p>{p2}</p>
          <button
            style={{
              color: "blue",
              fontSize: "10px",
              textDecoration: "underline",
              border: "none",
              background: "white",
            }}
            onClick={toggleVisible}
          >
            Show less
          </button>
        </>
      ) : (
        <>
          <p className="first" style={{ margin: "0" }}>
            {pCut}
          </p>
          <button
            style={{
              color: "blue",
              fontSize: "10px",
              textDecoration: "underline",
              border: "none",
              background: "white",
            }}
            onClick={toggleVisible}
          >
            Show more
          </button>
        </>
      )}
    </div>
  );
}

export default WindowText;
