import React from "react";
import { useReducer, useState } from "react";

import handleCounter from "./CounterFunction";
function Counter() {
  const initialst = { count: 0 };
  const [state, dispatch] = useReducer(handleCounter, initialst);
  const [changeBy, setChangeBy] = useState("");
  return (
    <div>
      <h1>Count: {state.count}</h1>
      Change By:{" "}
      <input
        type="number"
        value={changeBy}
        placeholder="Enter a Number"
        onChange={(e) => setChangeBy(Number(e.target.value))}
      />
      <button onClick={() => dispatch({ type: "increment", changeBy })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", changeBy })}>
        -
      </button>
    </div>
  );
}

export default Counter;
