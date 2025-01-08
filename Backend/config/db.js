const mongoose  = require('mongoose');

// Load envioutment Vaiables
require('dotenv').config();
// Connect to MongoDB
const ConnectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected !!!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {ConnectDB};