import React from "react";
import { useState, createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);
  const [isLogout, setIsLogout] = useState(false);
  const [role, setRole] = useState("User");
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        authServiceNumber,
        setAuthServiceNumber,
        isLogout,
        setIsLogout,
        role,
        setRole,
        auth, setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
