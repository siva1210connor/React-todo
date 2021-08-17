import React from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";

function Register() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.replace("/form");
  };
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="field">
          <label>E-mail</label>
          <input type="text" name="email" placeholder="E-mail" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button className="Sign-up button" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Register;
