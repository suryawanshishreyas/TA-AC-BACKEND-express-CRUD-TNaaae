var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type:String, required:true, unique: true},
    age: {type: Number, min:18},
    email:{type: String, match:/@/}
})

var User = mongoose.model('User',userSchema);
module.exports = User;