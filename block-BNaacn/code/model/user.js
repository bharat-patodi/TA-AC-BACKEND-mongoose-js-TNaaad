// Import mongoose
let mongoose = require('mongoose');

// Create a new Schema
let userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    password: {type: String, minlength: 5},
    createdAt: {type: Date, default: Date.now()}
});

// Create a model based on the Schema


// Export the model