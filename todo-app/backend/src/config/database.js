const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://test:test1234@ds153890.mlab.com:53890/nodetodo')