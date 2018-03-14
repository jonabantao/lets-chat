const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected');
    // socket.emit sends to single connection
    socket.emit('newMessage', {
      from: 'Admin',
      text: 'Welcome',
      createdAt: new Date().getTime(),
    });

    // socket.broadcast sends to everyone but self
    socket.broadcast.emit('newMessage', {
      from: 'Admin',
      text: 'New user joined',
      createdAt: new Date().getTime(),
    });

  socket.on('createMessage', (message) => {
    // io.emits to all connections - socket single connection
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime(),
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('Server up.');
});