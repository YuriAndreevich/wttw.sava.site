// import React, { useEffect, useRef, useState } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3001');

// function App() {
//   const localVideoRef = useRef();
//   const remoteVideoRef = useRef();
//   const localStream = useRef();
//   const peerConnectionRef = useRef(null);

//   const servers = {
//     iceServers: [
//       { urls: 'stun:stun.l.google.com:19302' },
//     ],
//   };

//   // Инициализация peerConnection
//   const initializePeerConnection = () => {
//     const pc = new RTCPeerConnection(servers);

//     pc.ontrack = (event) => {
//       if (remoteVideoRef.current) {
//         remoteVideoRef.current.srcObject = event.streams[0];
//       }
//     };

//     pc.onicecandidate = (event) => {
//       if (event.candidate) {
//         socket.emit('ice-candidate', { candidate: event.candidate });
//       }
//     };

//     if (localStream.current) {
//       localStream.current.getTracks().forEach((track) => pc.addTrack(track, localStream.current));
//     }

//     peerConnectionRef.current = pc;
//   };

//   // Создание Offer
//   const createOffer = async () => {
//     if (!peerConnectionRef.current) {
//       initializePeerConnection();
//     }

//     const offer = await peerConnectionRef.current.createOffer();
//     await peerConnectionRef.current.setLocalDescription(offer);
//     socket.emit('offer', { offer });
//   };

//   useEffect(() => {
//     const getLocalStream = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
//         localStream.current = stream;
//         if (localVideoRef.current) localVideoRef.current.srcObject = stream;
//       } catch (error) {
//         console.error('Ошибка при доступе к камере и микрофону', error);
//       }
//     };
//     getLocalStream();
//   }, []);

//   useEffect(() => {
//     socket.on('offer', async (data) => {
//       if (!peerConnectionRef.current) initializePeerConnection();
//       await peerConnectionRef.current.setRemoteDescription(data.offer);
//       const answer = await peerConnectionRef.current.createAnswer();
//       await peerConnectionRef.current.setLocalDescription(answer);
//       socket.emit('answer', { answer });
//     });

//     socket.on('answer', async (data) => {
//       await peerConnectionRef.current.setRemoteDescription(data.answer);
//     });

//     socket.on('ice-candidate', async (data) => {
//       if (peerConnectionRef.current) {
//         try {
//           await peerConnectionRef.current.addIceCandidate(data.candidate);
//         } catch (error) {
//           console.error('Ошибка ICE Candidate:', error);
//         }
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Видеозвонок</h1>
//       <div>
//         <video ref={localVideoRef} autoPlay muted playsInline style={{ width: '45%' }} />
//         <video ref={remoteVideoRef} autoPlay playsInline style={{ width: '45%' }} />
//       </div>
//       <button onClick={createOffer}>Начать соединение</button>
//     </div>
//   );
// }

// export default App;
