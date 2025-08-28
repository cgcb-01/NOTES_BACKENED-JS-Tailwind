import React, { useState } from "react";
const Rating = () => {
  const [rate, setRate] = useState(3);
  const [newRate, setNewRate] = useState(""); //Another state to pass the value of the input to the button
  const changeRating = () => {
    setRate(Number(newRate));
    setNewRate("");
  };
  return (
    <>
      <h1>Equaliser 3</h1>
      <h3>Rating:{rate}</h3>
      <input
        type="number"
        placeholder="Enter New rating"
        value={newRate} //The newrate value is shown after submit it goes again blank
        onChange={(e) => setNewRate(e.target.value)}
      />
      <button type="submit" onClick={changeRating}>
        Change Rating
      </button>
    </>
  );
};

//Random Number Generator
const RandomNumber = () => {
  const [number, setno] = useState(Math.random());
  return (
    <>
      <h1>The Random No is: {number} </h1>
      <button onClick={() => setno(Math.floor(Math.random() * 100))}>
        Generate New Number
      </button>
    </>
  );
};

function ExcerciseStates() {
  return (
    <>
      <Rating />
      <RandomNumber />
    </>
  );
}

export default ExcerciseStates;
