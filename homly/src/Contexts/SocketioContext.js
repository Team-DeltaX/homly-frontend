import React from "react";
import { useState, createContext, useEffect } from "react";
import { io } from "socket.io-client";
export const SocketioContext = createContext();

const SocketioContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const userId = localStorage.getItem("serviceNo");
  useEffect(() => {
    const newSocket = io("http://localhost:8081");
    newSocket.emit("addUser", userId);
    setSocket(newSocket);
  }, []);
  return (
    <SocketioContext.Provider value={{ socket }}>
      {children}
    </SocketioContext.Provider>
  );
};

export default SocketioContextProvider;