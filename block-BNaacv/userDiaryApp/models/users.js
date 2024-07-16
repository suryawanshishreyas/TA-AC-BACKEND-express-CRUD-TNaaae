var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type:String},
    email: {type: String}
})

var User = mongoose.model('User',userSchema);
module.exports = User;