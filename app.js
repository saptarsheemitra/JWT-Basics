require('dotenv');
require('express-async-errors');
const express = require('express');
const app = express();
// const connectDB = require('./db/connect');
const PORT = 8000;
const mainRoutes = require('./routes/main');

// Middleware
app.use(express.static('./public'));
app.use(express.json());

//Routes
app.use('/api/v1', mainRoutes);

const start = async () => {
    try {
        // await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`)
        })
    } catch (error) {
        console.error(error);
    }
}

start();

