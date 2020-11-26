const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0}
});