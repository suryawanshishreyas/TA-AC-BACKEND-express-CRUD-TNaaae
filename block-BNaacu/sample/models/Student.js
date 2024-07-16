var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name:{type: String, required:true},
    email: {type: String, match:/@/},
    age:{type:Number, min:12},
    college: {type: String, max:50}
})

var Student = mongoose.model('Student',studentSchema);
module.exports = Student;
