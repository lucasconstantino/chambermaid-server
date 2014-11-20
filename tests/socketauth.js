

var socket = require('sailsjs-socket.io-client');

socket.connect('http://127.0.0.1:1337',{}, function (socket) {
  console.log('conectado');
  socket.get('/device/auth', {sn: '0000001', key: '1234567890'}, function(data) {
    console.log(data);
  });
  socket.get('/device/isAuthenticated', {}, function(data) {
    console.log(data);
  });
  
})