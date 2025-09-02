import { createPortal } from "react-dom";

import Popup from "./components/popUp.jsx";
import React, { useState } from "react";

const Copy = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setInputValue("");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return createPortal(
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter any text"
      />
      <button onClick={handleCopy}>Copy</button>
      <Popup copied={copied} />
    </>,
    document.querySelector("#popup-content")
  );
};

export default Copy;
