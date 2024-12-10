import { io } from 'socket.io-client';

// Подключение к серверу
const socket = io('http://localhost:3001');

export default socket;