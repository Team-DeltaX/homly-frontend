import React from "react";
import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, authServiceNumber, setAuthServiceNumber }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
