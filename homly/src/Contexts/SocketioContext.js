import React from "react";
import { useState, createContext, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketioContext = createContext();

const SocketioContextProvider = ({ children }) => {
  const { authServiceNumber,isLogout, isLogged } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);
  const userId = sessionStorage.getItem("userId");
  useEffect(() => {
    const newSocket = io("http://localhost:8081");
    
    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (socket) {
      if (authServiceNumber) {
        socket.emit("addUser", authServiceNumber);
      } else {
        socket.emit("addUser", userId);
      }
    }
  }, [socket, authServiceNumber, userId,isLogged]);

  useEffect(() => {
    if(isLogout && socket){
      socket.disconnect();
    }
  }, [isLogout,socket]);


  return (
    <SocketioContext.Provider value={{ socket }}>
      {children}
    </SocketioContext.Provider>
  );
};

export default SocketioContextProvider;
