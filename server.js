const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

//Load env

dotenv.config({ path: './config/config.env' });


//connect to databse
connectDB();

//Route Files
const bootcamps = require('./routes/bootcamps');

const app = express();


//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log("server running on port 5000"));


//Handle unhandled rejections

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error : ${err.message}`);
    //Close server and exit process
    server.close(() => process.exit(1));

})


