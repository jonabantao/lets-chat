const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('connect', function () {
  console.log('connected');
});

socket.on('disconnect', function () {
  console.log('disconnected');
});

socket.on('newMessage', function (email) {
  console.log(email);
});

socket.emit('createMessage', {
  from: 'Test',
  text: 'This is a test messsage'
}, function (data) {
  console.log(data);
});