import { useState } from "react";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState();

  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
  }
  function logout() {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  }

  return [isAuth, login, logout];
}
