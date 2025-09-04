import React, { useContext } from "react";
import { UserContext } from "./userContext";

function userProfile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <h3>Name : {user}</h3>
    </div>
  );
}

export default userProfile;
