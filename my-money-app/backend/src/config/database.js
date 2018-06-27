const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://mymoneyapp:study102030@ds018268.mlab.com:18268/my-money-app')