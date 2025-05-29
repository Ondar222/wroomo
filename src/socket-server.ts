// socket-server.ts
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // или адрес фронтенда
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('✅ Socket.IO Server is running');
});

io.on('connection', (socket) => {
  console.log('🔌 Client connected:', socket.id);

  socket.on('sendMessage', (message) => {
    console.log('📩 Message received:', message);
    io.emit('receiveMessage', message); // Рассылаем всем клиентам
  });

  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

const PORT = 4001;
server.listen(PORT, () => {
  console.log(`🚀 Socket.IO server is running on http://localhost:${PORT}`);
});
