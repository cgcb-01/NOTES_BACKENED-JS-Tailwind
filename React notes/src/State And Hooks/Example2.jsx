import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);
  const ExtraFriend = ["CGCB", "Thor", "Alexander"];
  const [extraIndex, setExtraIndex] = useState(0);

  const addOneFriend = () => {
    if (extraIndex < ExtraFriend.length) {
      setFriends([...friends, ExtraFriend[extraIndex]]);
      setExtraIndex(extraIndex + 1);
    } else {
      alert("No more friends to add 😅");
    }
  };

  return (
    <>
      {friends.map((friend, index) => (
        <div key={index}>
          <h3>
            {index + 1}. {friend}
          </h3>
          <hr />
        </div>
      ))}
      <button onClick={addOneFriend}>Add Friend</button>
    </>
  );
};

export default App;
