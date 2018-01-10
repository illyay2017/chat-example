var app = require('express')();
var http = require('http').Server(app); // <-- this is new syntax to me for express!
//a new instance of socket.io is initialized by passing in the (http) server object
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    