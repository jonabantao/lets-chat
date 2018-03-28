const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('connect', function () {
  console.log('connected');
});

socket.on('disconnect', function () {
  console.log('disconnected');
});

// Listener for messages
export const receiveMessage = callback => {
  socket.on('newMessage', (message) => {
    callback(message);
  });
};

// Used to send message in react form
export const sendMessage = (text) => {
  socket.emit('createMessage', {
    from: 'Test',
    text
  }, (data) => {
    // console.log(data);
  });
};

export const createLocationMessage = pos => {
  socket.emit('createLocationMessage', {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude
  });
};
