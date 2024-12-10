// ./chat.js
import { Server } from 'socket.io';
import { version, validate } from 'uuid';
import ACTIONS from './actions.js'; // Убедитесь, что путь корректен

function getClientRooms(io) {
    const { rooms } = io.sockets.adapter;
    console.log('Server rooms data:', rooms);
    return Array.from(rooms.keys()).filter(roomID => validate(roomID) && version(roomID) === 4);
}

export function initializeChat(server) {
    const io = new Server(server, {
        cors: {
            origin: "https://149.154.65.49:3478",
            methods: ['GET', 'POST'],
        },
    });

    function shareRoomsInfo() {
        io.emit(ACTIONS.SHARE_ROOMS, {
            rooms: getClientRooms(io),
        });
    }

    io.on('connection', socket => {
        shareRoomsInfo();

        socket.on(ACTIONS.JOIN, config => {
            const { room: roomID } = config;
          
            if (!roomID) {
              console.error('Ошибка: отсутствует roomID');
              return;
            }
          
            const currentRooms = Array.from(socket.rooms);
          
            // Проверяем, не находится ли клиент уже в нужной комнате
            if (currentRooms.includes(roomID)) {
              console.log(`Клиент уже находится в комнате: ${roomID}`);
              return;
            }
          
            console.log(`Клиент присоединяется к комнате: ${roomID}`);
          
            // Покидаем все старые комнаты
            Array.from(socket.rooms).forEach(oldRoom => {
              if (oldRoom !== socket.id) {
                socket.leave(oldRoom);
                console.log(`Клиент покидает старую комнату: ${oldRoom}`);
              }
            });
          
            // Присоединяемся к новой
            socket.join(roomID);
          
            const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);
            console.log(`Клиенты в комнате ${roomID}:`, clients);
          
            clients.forEach(clientID => {
              io.to(clientID).emit(ACTIONS.ADD_PEER, {
                peerID: socket.id,
                createOffer: false,
              });
          
              socket.emit(ACTIONS.ADD_PEER, {
                peerID: clientID,
                createOffer: true,
              });
            });
          
            shareRoomsInfo();
          });
          
          

        function leaveRoom() {
            const { rooms } = socket;

            Array.from(rooms)
                .filter(roomID => validate(roomID) && version(roomID) === 4)
                .forEach(roomID => {
                    const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

                    clients.forEach(clientID => {
                        io.to(clientID).emit(ACTIONS.REMOVE_PEER, { peerID: socket.id });
                        socket.emit(ACTIONS.REMOVE_PEER, { peerID: clientID });
                    });

                    socket.leave(roomID);
                });

            shareRoomsInfo();
        }

        socket.on(ACTIONS.LEAVE, () => {
            console.log('Клиент покидает комнату');
            Array.from(socket.rooms).forEach(room => {
              if (room !== socket.id) {
                socket.leave(room);
                console.log(`Клиент покинул комнату: ${room}`);
              }
            });
          
            shareRoomsInfo();
          });
        socket.on('disconnecting', leaveRoom);

        socket.on(ACTIONS.RELAY_SDP, ({ peerID, sessionDescription }) => {
            io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, {
                peerID: socket.id,
                sessionDescription,
            });
        });

        socket.on(ACTIONS.RELAY_ICE, ({ peerID, iceCandidate }) => {
            io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, {
                peerID: socket.id,
                iceCandidate,
            });
        });
    });
}
