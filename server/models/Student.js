const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    name:{type:String,
        required:true,
    },
    email:{type:String,
    required:true,
    unique:true,
},
password:{type:String,
    required:true,
    unique:true,
},
isTeacher:{
    type:Boolean,
    required:true,
    default:false,
}
isAdmin:{type:Boolean,
    required:true,
    default:false,
}}

const Student = mongoose.model("Student",studentSchema)

module.exports = Student;

