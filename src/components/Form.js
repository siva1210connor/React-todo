import React, { useState, useEffect } from "react";
import Todo from "./Todo";


function Form(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState("{oldest}");
  const [sortedTodos, setSortedTodos] = useState([]);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Input field cannot be empty");
    }
  };

  useEffect(() => {
    const stored = sort === "{oldest}" ? [...todos] : [...todos].reverse();
    setSortedTodos(stored);
    console.log(stored);
  }, [sort, todos]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="form">
      <h1>Today's Task</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add Task"
          value={input}
          className="todo-input"
          onChange={handleChange}
        />
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      <hr />
      <select value={sort} onChange={handleSort}>
        <option value="{oldest}">Oldest</option>
        <option value="{latest}">Latest</option>
      </select>
      <hr />
      <div className="todos">
        {sortedTodos.map((todo, index) => (
          <Todo key={index} todo={todo} id={index} />
        ))}
      </div>
    </div>
  );
}

export default Form;
