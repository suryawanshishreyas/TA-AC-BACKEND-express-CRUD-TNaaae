var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String, required: true},
    email:{type:String, match:/@/},
    age:{type: Number, min:12},
    about: {type: String, max:500}
})

var User = mongoose.model("User",userSchema);
module.exports = User;