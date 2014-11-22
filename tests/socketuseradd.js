

var socket = require('sailsjs-socket.io-client');

socket.connect('http://127.0.0.1:1337',{}, function (socket) {
  console.log('conectado');
  socket.get('/user', {}, function(data) {
    console.log(data);
  });
  socket.post('/user', {}, function(data) {
    console.log(data);
  });
  
})