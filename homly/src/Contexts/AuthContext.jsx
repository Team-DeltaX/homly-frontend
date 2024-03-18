import React from "react";
import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);

  // store the login status in local storage
  useEffect(() => {
    if (isLogged) {
      localStorage.setItem("isLogged", isLogged);
      localStorage.setItem("authServiceNumber", authServiceNumber);
    }
    
    // setLoggedServiceNo(localStorage.getItem("authServiceNumber"));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
      setIsLogged(true);
      setAuthServiceNumber(localStorage.getItem("authServiceNumber"));
    }
  }, []);

  // delete local storage after 2 hour
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.removeItem("isLogged");
      localStorage.removeItem("authServiceNumber");
      setIsLogged(false);
      setAuthServiceNumber(null);
    }, 2*60*60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, authServiceNumber, setAuthServiceNumber }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
