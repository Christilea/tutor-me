const mongoose = require('mongoose')
const calendarSchema = mongoose.Schema({
    name:{type:String,
            required:true},
    email:{type:String,
            required:true,
        unique:true},
        startDate:{type:String,
            required:true},
        startTime:{type:String,
            required:true},
        eventType:{type:String,
            required:true},
        endDate:{type:String,
            required:true},
        endTime:{type:String,
        }

})



// module.exports = function (sequelize, DataTypes) {
//     const Tutoring = sequelize.define("tutoring", {
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         description: {
//             type: DataTypes.STRING
        
//         },
//         location: {
//             type: DataTypes.STRING
            
//         },
//         date_time: {
//             type: DataTypes.DATE 
//         }

//     });
// }
const Calendar = mongoose.model("Calendar",calendarSchema)
module.exports = Calendar;