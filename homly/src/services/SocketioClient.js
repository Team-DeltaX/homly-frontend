
import { io } from "socket.io-client";

const SocketioClient = () => {
  const userId = localStorage.getItem("userId");
  const socket = io("http://localhost:8081");
 

  return socket;
};

export default SocketioClient;
