import "./App.css";
import React from "react";
import Form from "./components/Form";
import ProctectedRoute from "./components/ProctedRoutes";
import useAuth from "./components/UseAuth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <div className="container">
      <h1>Todo List</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
        <Switch>
          <Route path="/signup" component={Register} />
        </Switch>
        <Switch>
          <ProctectedRoute path="/form" component={Form} auth={isAuth} />
        </Switch>

        {/* {isAuth ? (
          <>
            <div className="ui-message">
              You are now Logged In , Click Form{" "}
            </div>
            <button className="ui-button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="ui-message">You are Logged Out</div>
            <button className="ui-button" onClick={login}>
              Log In
            </button>
          </>
        )} */}
      </Router>
    </div>
  );
}

export default App;
