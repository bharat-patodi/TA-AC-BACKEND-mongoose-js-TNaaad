const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/learnmongoose", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {err? console.log(err):console.log("Connected to our precious")});
// mongodb://127.0.0.1:27017

const app = express();
const PORT = process.env.PORT || 5555;

// Listen
app.listen(PORT);