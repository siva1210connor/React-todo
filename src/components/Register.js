import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import { UserContext } from "../App";

function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formMsg, setFormMsg] = useState("");
  let users = [];
  const user = useContext(UserContext)

  const handleSubmit = (e) => {
    if (username !== "" && email !== "" && password !== "") {
      let status = createUser(username, email, password);
      if( status ){
        sessionStorage.setItem('currentLoggedIn', JSON.stringify({username: username}))
        user.login()
        history.push("/form");
      }
      e.preventDefault();
    }
  };

  const loginRoute = ()=>{
    history.replace('/')
  }

  const createUser = (username, email, password) => {
    if (localStorage.getItem("all_users")) {
      users = JSON.parse(localStorage.getItem("all_users"));
      for (let index in users) {
        if (
          users[index].username === username &&
          users[index].email === email
        ) {
          setFormMsg("User already exist");
          return false;
        }
      }
    }

    users.push({
      username: username,
      password: btoa(password),
      email: email,
    });

    localStorage.setItem("all_users", JSON.stringify(users));
    setUsername("");
    setEmail("");
    setPassword("");
    return true;
  };

  return (
    <div>
      <h2>Register</h2>
      <span className="Form-message">{formMsg}</span>
      <form>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <span className="error-msg"></span>
        </div>
        <div className="field">
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <span className="error-msg"></span>
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <span className="error-msg"></span>
        </div>
        <div className="buttons">
          <button className="login button" type="button" onClick={loginRoute}>
            Log in
          </button>
          <button
            className="Sign-up button"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
