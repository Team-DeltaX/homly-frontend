import React from "react";
import { useState, createContext, useEffect } from "react";
import AxiosClient from "../services/AxiosClient";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);
  const [isLogout, setIsLogout] = useState(false);
  const [user, setUser] = useState({
    serviceNo: "",
    name: "",
    image: "",
  });

  useEffect(() => {
    console.log(isLogged, localStorage.getItem("isLogged"), "isLogged");
    if (isLogged || localStorage.getItem("isLogged") === "true") {
      AxiosClient.get("/user/auth/details")
        .then((res) => {
          if (res) {
            console.log(res);
            setUser({
              ...user,
              serviceNo: res.data.serviceNo,
              name: res.data.name,
              image: res.data.image,
            });
          }
        })
        .catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
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
