import "./App.css";
import React from "react";
import Form from "./components/Form";
import ProtectedRoute from "./components/ProtectedRoutes";
import useAuth from "./components/UseAuth";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Todo List</h1>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={Register} />
            <ProtectedRoute path="/form" component={Form} auth={true} />
          </Switch>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
