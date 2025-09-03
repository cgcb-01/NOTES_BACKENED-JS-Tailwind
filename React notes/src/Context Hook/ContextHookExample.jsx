import React, { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const Data = createContext();
export const Data2 = createContext();
function ContextHookEx() {
  const name = "cgcb";
  const age = "19";
  return (
    <Data.Provider value={name}>
      <Data2.Provider value={age}>
        Send to Component A-- from main Sub Component
        <ComponentA />
      </Data2.Provider>
    </Data.Provider>
  );
}

export default ContextHookEx;
