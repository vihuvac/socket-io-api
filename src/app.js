/**
 * @ignore
 * Required modules.
 */
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

// Define the event name.
const MESSAGE_EVENT = 'chat_message';

// Create the express app.
const app = express();

// Set the middlewares.
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log(`socket ${socket.id} connected`);

  socket.on('disconnect', (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });

  // Listen for `MESSAGE_EVENT` event. The client emits this event (with the same name).
  socket.on(MESSAGE_EVENT, (message) => {
    console.log(`message received: ${message}`);

    // Emit the message for the `MESSAGE_EVENT` to all connected clients (just send it back for testing purposes only).
    io.emit(MESSAGE_EVENT, message);
  });
});

const PORT = process.env.PORT ?? 4000;
httpServer.listen(PORT, () => console.info(`The API is running on port ${PORT}, http://localhost:${PORT} 🚀🚀🚀`));
