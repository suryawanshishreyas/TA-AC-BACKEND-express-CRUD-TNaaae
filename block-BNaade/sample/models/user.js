var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    age:{type:Number},
    about:{type:String, max:500}
})

var User = mongoose.Model('User',userSchema)
module.exports = User;