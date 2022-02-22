const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: {
        type: String,
        enum: ['Admin','Owner','User', 'Dev']
     }
})

let date = 2004-01-01;

ProfileSchema.pre('save', function(next)
{
    console.log("Middleware de entrada de Profile");
    if(this.dateOfBirth > date)
    {
        console.log("Eres mayor de edad")
        next();
    }
    else
        console.log("Solo mayores de edad")
    
})

module.exports = mongoose.model("Profile", ProfileSchema, "profile")