var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    fullname: {
      type: String,
        default: ''
    },
    username: {
      type: String,
        default: ''
    },
    email: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    },
    phone: {
      type: Number,
      default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', User);