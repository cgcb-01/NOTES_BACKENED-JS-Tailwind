import React from "react";
const Welcome = ({ loggedIn, isAdmin }) => {
  if (!loggedIn) return <h3>Please log in to continue.</h3>;
  else if (loggedIn && isAdmin) return <h3>Welcome Admin!🤵</h3>;
  else return <h3>Welcome User!👧 or 🧑</h3>;
};

function UserStatus() {
  return (
    <div>
      <h1>User Status</h1>
      <Welcome loggedIn={true} isAdmin={false} />
    </div>
  );
}

export default UserStatus;
