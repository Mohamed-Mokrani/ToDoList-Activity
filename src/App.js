import React, { useState } from "react";

import "./App.css";
import Activity from "./Componants/Activity";
import Container from "./Componants/Container";

const App = () => {
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState("");
  const [todos, setTodos] = useState([]);

  const BtnClick = () => {
    setTodos([...todos, { activity, description, done }]);
    setActivity("");
    setDone("");
    setDescription("");
  };

  return (
    <div className="App">
      <Container
        activity={activity}
        description={description}
        BtnClick={BtnClick}
        setActivity={setActivity}
        setDescription={setDescription}
      />

      {todos.map((todo) => (
        <Activity 
        todoActivity={todo.activity}
        todoDescription={todo.description}
        todoDone={todo.done}
        />
      ))}
    </div>
  );
};

export default App;
