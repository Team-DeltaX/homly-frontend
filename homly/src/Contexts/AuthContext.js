import React from "react";
import { useState, createContext, useEffect } from "react";
import AxiosClient from "../services/AxiosClient";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);
  const [isLogout, setIsLogout] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        authServiceNumber,
        setAuthServiceNumber,
        isLogout,
        setIsLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
