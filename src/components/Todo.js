import React, { useState, useEffect } from "react";

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
      <label htmlFor={props.id}>{todo}</label>
    </div>
  );
}

export default Todo;
