import React from "react";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authServiceNumber, setAuthServiceNumber] = useState(null);

  const [user, setUser] = useState({
    serviceNo: "",
    name: "",
    nic: "",
    work: "",
    address: "",
    contactNo: "",
    email: "",
    image: "",
  });

  // store the login status in local storage
  useEffect(() => {
    if (isLogged) {
      axios
        .get(`${global.API_BASE_URL}/users/auth/details`, {
          withCredentials: true,
        })
        .then((res) => {
          if (Response) {
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
  }, [isLogged]);

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, user, authServiceNumber, setAuthServiceNumber }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
