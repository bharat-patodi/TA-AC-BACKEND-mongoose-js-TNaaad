const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learningMongoose', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    err ? console.log(err) : console.log('This db connection is alive now');
});

const app = express();

const PORT = process.env.PORT || 5656;
app.listen(PORT);