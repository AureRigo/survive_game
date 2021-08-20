const express = require('express');
const socket = require('socket.io');
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
const io = socket(server);

app.use(express.static('public'));

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection: ' + socket.is);
    console.log(socket.id);
}
// app.get('/', (req, res) => {
//     res.send();
// });

