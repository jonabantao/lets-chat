const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected');
    // socket.emit sends to single connection
    socket.emit('newMessage', generateMessage(
      'Admin', 'Welcome to the chatroom'
    ));

    // socket.broadcast sends to everyone but self
    socket.broadcast.emit('newMessage', generateMessage(
      'Admin', 'New user joined'
    ));

  socket.on('createMessage', (message, callback) => {
    // io.emits to all connections 
    io.emit('newMessage', generateMessage(
      message.from,
      message.text
    ));
    // Data sent back by server after receiving message
    callback('heeeyy');
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('Server up.');
});