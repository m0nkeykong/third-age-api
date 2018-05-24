var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = new Schema({
        id:  {type: Number, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true},
        publisher: {type: String, required: true}
});
