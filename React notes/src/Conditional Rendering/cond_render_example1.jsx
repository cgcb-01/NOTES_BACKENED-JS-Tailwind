import React from "react";

const ValidPassword = () => {
  return (
    <div>
      <h1>Your Password is Valid</h1>
    </div>
  );
};
const Invalidpassword = () => {
  return (
    <div>
      <h1>Your Password is Invalid</h1>
    </div>
  );
};
const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <Invalidpassword />;
};
function App() {
  return (
    <div>
      <Password isValid={true} />
    </div>
  );
}

export default App;
