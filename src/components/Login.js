import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.replace("/form");
  };
  const regClick = (e) => {
    e.preventDefault();
    history.replace("/signup");
  };
  return (
    <div>
      <form>
        <h2>Login</h2>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <div className="buttons">
          <button className="button" onClick={handleClick}>
            Login
          </button>
          <button className="button" onClick={regClick}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
