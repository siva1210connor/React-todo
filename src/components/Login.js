import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

function Login() {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const user = useContext(UserContext);

  const handleClick = (e) => {
    if (username !== "" && password !== "") {
      if (localStorage.getItem("all_users")) {
        const users = JSON.parse(localStorage.getItem("all_users"));
        let flag = 0;
        for (let i in users) {
          if (
            users[i].username === username &&
            users[i].password === btoa(password)
          ) {
            sessionStorage.setItem(
              "currentLoggedIn",
              JSON.stringify({ username: username })
            );
            user.login();
            history.push("/form");
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          setFormMsg("Invalid Username or Password");
        }
      } else {
        setFormMsg("Invalid Username or Password");
      }

      e.preventDefault();
    }
    // history.replace("/form");
  };

  const regClick = () => {
    history.replace("/signup");
  };

  return (
    <div>
      <form>
        <h2>Login</h2>
        <span className="Form-message">{formMsg}</span>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            ref={usernameRef}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            name="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="password"
            required
          />
        </div>
        <div className="buttons">
          <button className="button" type="submit" onClick={handleClick}>
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
