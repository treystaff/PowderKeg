var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
	socket.broadcast.emit('chat', 'A user entered the chat.');

  socket.on('chat', (msg) => {
		io.emit('chat', msg)
  });

	socket.on('disconnect', () => {
		socket.broadcast.emit('chat', 'A user left the chat.');
	});

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
