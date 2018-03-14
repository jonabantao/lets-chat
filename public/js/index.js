const socket = io(); // eslint-disable-line

socket.on('connect', function () {
  console.log('connected');

});

socket.on('disconnect', function () {
  console.log('disconnected');
});

socket.on('newMessage', function (email) {
  console.log(email);
});