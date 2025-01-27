const express = require('express');
const cors = require('cors');
const port = 9000;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const connectDB = require('./config/config');
connectDB();

// Routes
const routes = require('./routes/authRoute');
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});