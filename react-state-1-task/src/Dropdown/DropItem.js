import React, { useState } from "react";

function DropItem(props) {
  const { value } = props;
  return (
    <>
      <div>{value}</div>
    </>
  );
}

export default DropItem;
