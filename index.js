require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB, initWebSocket } = require("./config/config");
const routes = require("./routes/authRoute");

const app = express();
const port = 9000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
connectDB();

// WebSocket initialization
initWebSocket();

// Routes
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
