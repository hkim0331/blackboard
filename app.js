const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");});

app.get('/2',(req,res) => {
    res.sendFile(__dirname + "/index2.html");});

io.on('connection',(socket) => {
    socket.on('bb',(msg) => {
        io.emit('bb',msg); });});

server.on('listening',() => {
    console.log('listening on 4002');});

server.listen(4002);
