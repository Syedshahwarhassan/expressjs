const mongoose = require('mongoose');

const dbconnection=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/user');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}
module.exports = dbconnection;