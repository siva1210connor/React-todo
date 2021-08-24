import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Todo from "./Todo";
import "./Form.css";
import { useContext } from "react";
import { UserContext } from "../App";

function Form(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState("{oldest}");
  const [sortedTodos, setSortedTodos] = useState([]);
  const history = useHistory();
  const user = useContext(UserContext);
  let username = '';
  let storedTodos = []

  const handleLogout = (e) => {
    e.preventDefault();
    user.logout();
    sessionStorage.removeItem('currentLoggedIn')
    history.replace("/");
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const addTodo = () => {
    if (input) {
      username = JSON.parse(sessionStorage.getItem('currentLoggedIn')).username;
      if(localStorage.getItem( username + '_todos')){
        storedTodos = JSON.parse(localStorage.getItem( username + "_todos"))
      }
      let newTodo = {label: input};
      storedTodos.push(newTodo)
      localStorage.setItem( username + "_todos", JSON.stringify(storedTodos))
      setTodos([...todos, newTodo]);
      
      setInput("")
    } else {
      alert("Input field cannot be empty");
    }
  };

  useEffect(() => {
    const stored = sort === "{oldest}" ? [...todos] : [...todos].reverse();
    setSortedTodos(stored);
    console.log(stored)
  }, [sort, todos]);

  useEffect (() => {
    username = JSON.parse(sessionStorage.getItem('currentLoggedIn')).username;
    if(localStorage.getItem( username + '_todos')){
      setTodos(JSON.parse(localStorage.getItem( username + '_todos')))
      setSortedTodos(JSON.parse(localStorage.getItem( username + '_todos')))
    }
  },[])

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="form">
      <h2>Today's Task</h2>
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
        <select value={sort} onChange={handleSort}>
          <option value="{oldest}">Oldest</option>
          <option value="{latest}">Latest</option>
        </select>
      </div>
      <div className="todos">
        {sortedTodos.map((todo, index) => (
          <Todo key={index} todo={todo} id={index} />
        ))}
      </div>
      <button className="logout button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Form;
