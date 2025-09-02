import React, { useState, useEffect } from "react";

function useEffectExample() {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    console.log("Called useEffect");
    document.title = `Increment ${value}`;
  }, []); //Empty Dependency List
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={setvalue(value + 1)}>Increment</button>
    </div>
  );
}

export default useEffectExample;
