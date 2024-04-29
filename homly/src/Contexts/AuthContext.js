import React from "react";
import { useState, createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);
  const [isLogout, setIsLogout] = useState(false);
  const [role, setRole] = useState("User");

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
