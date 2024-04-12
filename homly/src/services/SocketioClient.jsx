import {useEffect, useState} from 'react'
import {io} from 'socket.io-client'

export default function useSocketioClient() {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const newSocket = io("http://localhost:8081");
        setSocket(newSocket);
        return () => newSocket.close();
    }, []);
    return socket;
}
