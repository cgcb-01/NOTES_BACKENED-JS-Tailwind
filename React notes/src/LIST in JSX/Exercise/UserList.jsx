import React from "react";
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

function UserList() {
  return (
    <div>
      <h1>USER LIST</h1>
      {users.map(({ id, name, age }) => (
        <div key={Math.random()}>
          <h3>User ID: {id}</h3>
          <h3>User Name: {name}</h3>
          <h3>User Age: {age}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList;
