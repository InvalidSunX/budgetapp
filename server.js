require('dotenv').config();

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// API ENDPOINTS
app.get('/api/events', (req, res) => {
    res.json({
        message: 'List all events'
    });
});
app.get('/api/events/:id', (req, res) => {
    res.json({
        message: `Get event ${req.params.id}`
    });
});
app.post('/api/events', (req, res) => {
    console.log(req.body);

    res.json({
        success: true,
        message: 'Create event',
        received: req.body
    });
});
app.patch('/api/events/:id', (req, res) => {
    res.json({
        success: true,
        message: `Update event ${req.params.id}`,
        received: req.body
    });
});
app.delete('/api/events/:id', (req, res) => {
    res.json({
        sucess: true,
        message: `Delete event ${req.params.id}`
    });
});

server.listen(PORT, () => {
    console.log(`Budget app running on port ${PORT}`);
});


