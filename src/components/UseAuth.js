import { useState } from "react";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState();

  function login() {
    setIsAuth(true);
  }
  function logout() {
    setIsAuth(false);
  }

  return [isAuth, login, logout];
}
