import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, { activity, description, done }]);
    setActivity("");
    setDone("");
    setDescription("");
  };

  return (
    
    <div className="App">
      <div className="container">
        <div className="input-div">
          <input
            type="text"
            placeholder="Activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button onClick={handleAddTodo}>Submit</button>
      </div>

      {todos.map((todo) => (
        <div className="activity">
          <h1>{todo.activity}</h1>
          <h2 className="description">{todo.description}</h2>
          <h3>{todo.done="Not done yet"}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
