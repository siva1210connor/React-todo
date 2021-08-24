import "./App.css";
import React from "react";
import Form from "./components/Form";
import ProtectedRoute from "./components/ProtectedRoutes";
import useAuth from "./components/UseAuth";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect } from "react/cjs/react.development";

export const UserContext = React.createContext();

function App() {
  const [isAuth, login, logout] = useAuth(false);
  const userFunctions = {
    login: login,
    logout: logout,
    isAuth: isAuth
  }

  return (
    <>
      <UserContext.Provider value={userFunctions}>
        <BrowserRouter>
          <div className="container">
            <h1>Todo List</h1>
            <Router>
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={Register} />
                <ProtectedRoute path="/form" component={Form} auth={isAuth} />
                {/* {isAuth ? <Redirect to={{path: '/form', }} /> : null} */}
                
              </Switch>
            </Router>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
