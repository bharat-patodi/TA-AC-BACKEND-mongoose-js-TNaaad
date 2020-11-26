const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    favorites: [String],
    marks: [Number]
});

const addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId,
});

module.exports = mongoose.model('User', userSchema);