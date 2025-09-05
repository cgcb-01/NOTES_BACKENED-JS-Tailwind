import React, { useId } from "react";

function UniqueId() {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />
    </div>
  );
}

export default UniqueId;
