

var socket = require('sailsjs-socket.io-client');

socket.connect('http://127.0.0.1:1337',{}, function (socket) {
  socket.get('/device', {}, function(data) {
    console.log(data);
  });
  socket.post('/device', { name: 'Test Device', pbkey: '1234567890', serialNumber: '0000001' }, function(data) {
    console.log(data);
  });
  socket.get('/device', {}, function(data) {
    console.log(data);
  });
})