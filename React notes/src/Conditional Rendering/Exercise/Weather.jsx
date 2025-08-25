import React from "react";
const Temperature = ({ temp }) => {
  if (temp < 15) return <h3>It's cold outside!🌨️</h3>;
  else if (temp >= 15 && temp <= 25) return <h3>It's nice Outside.☀️</h3>;
  else return <h3>It's hot outside!🫡</h3>;
};

function Weather() {
  return (
    <div>
      <h1>Today's Weather update</h1>
      <Temperature temp={12} />
    </div>
  );
}

export default Weather;
