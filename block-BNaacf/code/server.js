const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/learnmongoose", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    err? console.log(err):console.log('Connected to database');
});

const app = express();
const PORT = process.env.PORT || 3333;

console.log(mongoose.Schema);
app.listen(PORT);