// Import mongoose
const mongoose = require('mongoose');

// Create a new Schema
let articleSchema = new mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    createdAt: {type: Date, default: Date.now()},
    likes: {type: Number, default: 0}
});

// Define a new model and export it
module.exports = mongoose.model('Article', articleSchema);