import React from "react";

function Greeting({ timeOfDay }) {
  if (timeOfDay == "morning") return <h3>Good Morning!☀️</h3>;
  else if (timeOfDay == "afternoon") return <h3>Good Afternoon!🌤️</h3>;
  else return <h3>Good Night🌛</h3>;
}

export default Greeting;
