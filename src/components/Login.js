import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const handleClick = () => {
    history.replace("/form");
  };
  const regClick = () => {
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
          <button className="button" type="button" onClick={handleClick}>
            Login
          </button>
          <button className="button" type="button" onClick={regClick}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
