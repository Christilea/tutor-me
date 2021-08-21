const asyncHandler = require("express-async-handler")
const Calendar = require("../models/Calendar")
const addEvent = asyncHandler((req,res) => {
    
    newEntry.save(function(error,entry){
        if(error){res.send(error)}
        else{
            const newEntry = new Calendar({
                name:req.name,
                email:req.email,
                startDate:req.startDate,
                startTime:req.startTime,
                eventType:req.eventType,
                endDate:req.endDate,
                endTime:req.endTime,



            })
           res.status(201).json(newEntry) 
        }
    })

})