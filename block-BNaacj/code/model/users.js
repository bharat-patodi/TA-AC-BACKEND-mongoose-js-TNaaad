const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    favorites: [String],
    marks: [Number],
    password: {type: String, min: 5, max: 15},
    createdAt: {type: Date, default: Date.new()}
});

const addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId,
});
