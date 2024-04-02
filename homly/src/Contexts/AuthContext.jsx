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
        .get(`http://localhost:8080/users/auth/details`, {
          withCredentials: true,
        })
        .then((res) => {
          if (Response) {
            setUser({
              ...user,
              // serviceNo: res.data.serviceNo,
              name: res.data.name,
              // nic: res.data.nic,
              // work: res.data.work,
              // address: res.data.address,
              // email: res.data.email,
              // contactNo: res.data.contactNo,
              image: res.data.image,
            });
          }
        })
        .catch((err) => {
          console.log(err)
        });

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
    }, 2 * 60 * 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, user, authServiceNumber, setAuthServiceNumber }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
