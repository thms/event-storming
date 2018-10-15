const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventSchema = new Schema({
    name: {type: String, required: true, max: 100},
    xpos: {type: Number, required: true},
    ypos: {type: Number, required: true}
});


// Export the model
module.exports = mongoose.model('Event', EventSchema);
