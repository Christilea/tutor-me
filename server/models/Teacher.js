
const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
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
    default:true,
},
isAdmin:{
    type:Boolean,
    required:true,
    default:false,
}})

const Teacher = mongoose.model("Teacher",teacherSchema)

module.exports = Teacher;