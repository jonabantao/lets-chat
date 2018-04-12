const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const { generateMessage, generateLocationMessage } = require('./utils/message');
const { Users } = require('./utils/users');

const publicPath = path.join(__dirname, '../dist');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const users = new Users();

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, '/index.html'));
});

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    socket.join(room);
    users.removeUser(socket.id);
    users.addUser(socket.id, name, room);

    io.to(room).emit('updateUserList', users.getUserList(room));

    // socket.emit sends to single connection
    socket
      .emit('newMessage', generateMessage('Admin', `Welcome to room ${room}`));

    // socket.broadcast sends to everyone but self
    socket
      .broadcast
      .to(room)
      .emit('newMessage', generateMessage('Admin', `${name} joined the room.`));

    callback();
  });

  socket.on('createMessage', (message, callback) => {
    const user = users.getUser(socket.id);

    if (user) {
      // io.emits to all connections
      io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
    }

    // Data sent back by server after receiving message
    callback();
  });

  socket.on('createLocationMessage', ({ latitude, longitude }) => {
    const user = users.getUser(socket.id);

    if (user) {
      io.to(user.room).emit('newMessage', generateLocationMessage(user.name, latitude, longitude));
    }
  });

  socket.on('disconnect', () => {
    const user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left the room.`));
    }
  });
});

server.listen(port, () => {
});
