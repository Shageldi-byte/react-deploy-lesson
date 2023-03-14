import { io } from "socket.io-client";

export const socket = io('http://192.168.1.8:12345',{
    autoConnect: true,
    transports: ['websocket']
})