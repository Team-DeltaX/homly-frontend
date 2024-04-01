import React from "react";
import { useState, createContext, useEffect } from "react";
import AxiosClient from "../services/AxiosClient";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);

  const [user, setUser] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (isLogged || isUpdated) {
      AxiosClient.get("/user/auth/details")
        .then((res) => {
          if (res) {
            setUser({
              ...user,
              name: res.data.name,
              image: res.data.image,
            });
          }
        })
        .catch((err) => {
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged,isUpdated]);

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, user, authServiceNumber, setAuthServiceNumber ,setIsUpdated}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
