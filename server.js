const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servindo os arquivos do frontend
app.use(express.static(path.join(__dirname, 'public')));

// Conexão WebSocket
io.on('connection', (socket) => {
    console.log('Um jogador se conectou');
    socket.on('disconnect', () => {
        console.log('Um jogador se desconectou');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));