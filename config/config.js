require('dotenv').config();
const mongoose = require('mongoose');
const WebSocket = require("ws");

const connectDB = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    
    if (!MONGO_URL) {
        console.error('Error: MONGO_URL not found in environment variables');
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

const initWebSocket = () => {
    const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT;
    const wss = new WebSocket.Server({ port: WEBSOCKET_PORT });

    wss.on("connection", function connection(ws) {
        console.log("New client connected");

        ws.on("message", function incoming(message) {
            console.log("received: %s", message);
            ws.send("le message a ete recu");
        });
    });

    return wss;
};

module.exports = {
    connectDB,
    initWebSocket
};