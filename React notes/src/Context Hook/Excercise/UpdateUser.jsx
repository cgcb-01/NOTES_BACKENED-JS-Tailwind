import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "./userContext";
function UpdateUser() {
  const { updateUser } = useContext(userContext);
  const { newName, setNewName } = useState("");
  return (
    <div>
      <h2>Update User Name:</h2>
      <input type="text" value={updateUser.name} />
    </div>
  );
}

export default UpdateUser;
