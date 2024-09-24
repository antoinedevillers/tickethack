const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Antoine:l9lEzuYzxrTKHSzY@cluster0.nil6t.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000})
.then(() => console.log('Database connected'))
.catch(error => console.error(error));