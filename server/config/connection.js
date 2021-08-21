const mongoose = require('mongoose');

const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
    console.error(`Error: ${error.message}`)
    }
    }
// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/tutor-me',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//     }
// );

module.exports = connectDB;