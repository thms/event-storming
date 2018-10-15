const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PolicySchema = new Schema({
    name: {type: String, required: true, max: 100},
    xpos: {type: Number, required: true},
    ypos: {type: Number, required: true}
});


// Export the model
module.exports = mongoose.model('Policy', PolicySchema);
