const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title: String,
    date: Number,
    author: String
});

mongoose.connect("mongodb://localhost:27017/learnmongoose", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {err? console.log(err):console.log("Connected to our precious")});
// mongodb://127.0.0.1:27017
