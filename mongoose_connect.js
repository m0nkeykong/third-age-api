var mongoose = require ('mongoose'),
    login = require('./consts'),
    data = require('./Scheme');

mongoose.connect(login.MLAB_KEY);

module.exports = data;
