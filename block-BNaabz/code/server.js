let express = require('express');
let mongoose = require('mongoose');
// Connect the db prior to instantiating the server so that any req before it moves through the functions, is connected to the db
mongoose.connect("mongodb://127.0.0.1:27017/learnmongoose", { useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    console.log(err?err:"Connect to db");
});
const app = express();
let PORT = process.env.PORT || 3333;
app.listen(PORT);