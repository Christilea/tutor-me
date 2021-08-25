const mongoose = require('mongoose');
const db = process.env.mongoURI;


const connectDB = async () => {
try {
await mongoose.connect(db, {
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false,
useUnifiedTopology: true
});


console.log('MongoDB Connected...');
} catch (err) {
console.error(err.message);
// Exit process with failure
process.exit(1);
}
};


module.exports = connectDB;

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/tutor-me',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//     }
// );
