import React from "react";
import { useState, createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);
  const [isLogout, setIsLogout] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [isOngoingReservationChange, setIsOngoingReservationChange] =
    useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        authServiceNumber,
        setAuthServiceNumber,
        isLogout,
        setIsLogout,
        isOngoingReservationChange,
        setIsOngoingReservationChange,
        isUpdate,
        setIsUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
