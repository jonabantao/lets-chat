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

socket.emit('createMessage', {
  from: 'Test',
  text: 'This is a test messsage'
}, function (data) {
  console.log(data);
});