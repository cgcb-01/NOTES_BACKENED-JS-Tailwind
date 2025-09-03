import React, { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const Data = createContext();

function ContextApiex() {
  const name = "cgcb";
  return (
    <Data.Provider value={name}>
      <ComponentA />
    </Data.Provider>
  );
}

export default ContextApiex;
