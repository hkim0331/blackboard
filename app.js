const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");});

io.on('connection',(socket) => {
    socket.on('bb',(msg) => {
        io.emit('bb',msg); });});

server.on('listening',() => {
    console.log('listening on 4002');});

server.listen(4002);

