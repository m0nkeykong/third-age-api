var mongoose = require('mongoose'),
    book = require('./book.js'),
    Schema = mongoose.Schema,
    books = new Schema({
        author: {type: String, required: true},
        'books': [book]
    }, {collection : 'books'});

module.exports = mongoose.model('Book', books);

