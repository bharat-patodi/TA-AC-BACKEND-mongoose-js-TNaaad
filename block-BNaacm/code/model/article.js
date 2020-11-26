let express = require('express');
let mongoose = require('mongoose');

let Schema = new mongoose.Schema;

articleSchema = new Schema({
    title: String,
    description: String
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;
