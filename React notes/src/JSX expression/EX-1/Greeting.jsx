import React from "react";
const name = "cgcb-01";
function currentDate() {
  const date = new Date();
  return date.toDateString();
}

function Greeting() {
  return (
    <div>
      <h1> Hello, I am {name}</h1>
      <p>Todays date is: {currentDate()}</p>
    </div>
  );
}

export default Greeting;
