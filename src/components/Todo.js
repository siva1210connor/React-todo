import React, { useState, useEffect } from "react";
import "./Todo.css";

function Todo(props) {
  const todo = props.todo;
  const [checked, setChecked] = useState("");

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div className="todo">
      <input
        type="checkbox"
        id={props.id}
        checked={checked}
        onChange={() => setChecked(checked === "" ? "checked" : "")}
      />
      <label htmlFor={props.id}>{todo.label}</label>
    </div>
  );
}

export default Todo;
