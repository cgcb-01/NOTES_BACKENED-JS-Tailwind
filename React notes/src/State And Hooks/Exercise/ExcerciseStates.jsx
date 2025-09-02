import React, { useState, useEffect } from "react";

//Ques No :1 Movie Rating System
const Rating = () => {
  const [rate, setRate] = useState(3);
  const [newRate, setNewRate] = useState("");

  const changeRating = () => {
    setRate(Number(newRate));
    setNewRate("");
  };

  return (
    <>
      <h1>Equaliser 3</h1>
      <h3>Rating: {rate}</h3>
      <input
        type="number"
        placeholder="Enter New rating"
        value={newRate}
        onChange={(e) => setNewRate(e.target.value)} // To pass the value to button cange the value of newRate
      />
      <button
        type="submit"
        onClick={
          changeRating
          //On click will assign newRate value to rate
        }
      >
        Change Rating
      </button>
    </>
  );
};

// QUES:2 Random No generator
const RandomNumber = () => {
  const [number, setNo] = useState(Math.floor(Math.random() * 100));
  return (
    <>
      <h1>The Random No is: {number}</h1>
      <button onClick={() => setNo(Math.floor(Math.random() * 100))}>
        Generate New Number
      </button>
    </>
  );
};

// QUES:3 Changing name with useEffect()
const Name = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  const [newname, setnewname] = useState("");

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]); //This runs after render if anyting on the dependency array changes here [name] and the function on change updates the local storate with key "name" and a value.

  const changeName = () => {
    setName(newname);
    setnewname("");
  };

  return (
    <div>
      <h1>Hello Everyone, I am : {name}</h1>
      <input
        value={newname}
        onChange={(e) => setnewname(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

//Ques: 4
const Todo = () => {
  const [tasks, setlist] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState("");
  const handleSubmit = () => {
    if (task.trim()) {
      setlist([...tasks, task.trim()]);
      setTask("");
    }
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div>
      <h1>Todo List</h1>
      {tasks.map((todo) => (
        <ul key={Math.random()}>
          <li>{todo}</li>
        </ul>
      ))}
      <input
        type="text"
        value={task}
        placeholder="Enter A new Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

// Ques 5

const Profile = () => {
  const [profile, setprofile] = useState({
    name: "",
    age: "",
    number: "",
  });
  const [copyprofile, setcpyprofile] = useState({
    name: "",
    age: "",
    number: "",
  });

  const handleSubmit = () => {
    let newProfile = { ...profile }; // Breaking it into objects by spread operator
    let cpynew = { ...copyprofile };
    if (copyprofile.name.trim()) newProfile.name = copyprofile.name;
    if (copyprofile.age.trim()) newProfile.age = copyprofile.age;
    if (copyprofile.number.trim()) newProfile.number = copyprofile.number;
    cpynew.name = cpynew.age = cpynew.number = "";
    setcpyprofile(cpynew);

    setprofile(newProfile);
  };

  return (
    <div>
      <h1>Profile Information Update</h1>
      <h3>Name: {profile.name}</h3>
      <h3>Age: {profile.age}</h3>
      <h3>Phone Number: {profile.number}</h3>
      <h2>Update Information:</h2>

      <input
        type="text"
        value={copyprofile.name}
        onChange={(e) =>
          setcpyprofile({ ...copyprofile, name: e.target.value })
        }
        placeholder="Enter the new Name"
      />
      <input
        type="number"
        value={copyprofile.age}
        onChange={(e) => setcpyprofile({ ...copyprofile, age: e.target.value })}
        placeholder="Enter the new Age"
      />
      <input
        type="number"
        value={copyprofile.number}
        onChange={(e) =>
          setcpyprofile({ ...copyprofile, number: e.target.value })
        }
        placeholder="Enter the new Phone Number"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

function ExcerciseStates() {
  return (
    <>
      <Rating />
      <RandomNumber />
      <Name />
      <Todo />
      <Profile />
    </>
  );
}

export default ExcerciseStates;
