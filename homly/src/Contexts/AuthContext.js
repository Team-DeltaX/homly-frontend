import React from "react";
import { useState, createContext, useEffect } from "react";
import AxiosClient from "../services/AxiosClient";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);
  // const [socket, setSocket] = useState(null);
  const [user, setUser] = useState({
    serviceNo: "",
    name: "",
    image: "",
  });

  useEffect(() => {
    if (isLogged || isUpdated) {
      localStorage.setItem("isLogged", isLogged);
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

            localStorage.setItem("serviceNo", res.data.serviceNo);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("image", res.data.image);
          }
        })
        .catch(() => {});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        authServiceNumber,
        setAuthServiceNumber,
        setIsUpdated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
