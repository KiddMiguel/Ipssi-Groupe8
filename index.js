require("dotenv").config();
const express = require("express");
const cors = require("cors");
const WebSocket = require("ws");
const connectDB = require("./config/config");
const routes = require("./routes/authRoute");

const app = express();
const port = 9000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
connectDB();

// Routes
app.use("/api", routes);

const wss = new WebSocket.Server({ port: 8069 });

wss.on("connection", function connection(ws) {
  console.log("New client connected");

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
    ws.send("le message a ete recu");
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
