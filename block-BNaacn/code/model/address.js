// Import mongoose
const mongoose = require('mongoose');
// Create a new Schema
const addressSchema = new mongoose.Schema({
    village: String,
    city: {type: String, required: true},
    state: {type: String, required: true},
    pin: Number,
    user: mongoose.Schema.Types.ObjectId, // How can this be associated with the user schema?
}, {timestamps: true});
// Create a new model based on the Schema
let Address = mongoose.model("Address", addressSchema);

// Export the model
module.exports = Address;