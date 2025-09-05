import React, { useRef } from "react";

function App() {
  const inputElement = useRef(null);
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "cgcb";
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput}>Write</button>
    </div>
  );
}

export default App;
