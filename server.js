const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;

app.use(express.static('public')); // Папка для клиента

io.on('connection', (socket) => {
  console.log('Пользователь подключился');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Пользователь отключился');
  });
});

http.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});