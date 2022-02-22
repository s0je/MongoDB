const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        validate: [
        function(password){
            return password.length >= 6;
        },
        'El password deberia de ser mas largo ']
    }
})

UserSchema.pre('save', function(next)
{
    console.log("Middleware de entrada User")
    if(this.login.length >= 5 )
    {
        console.log("Login correcto")
        next();
    }
    else
    {
        console.log("Login demasiado corto")
    }    
    
});

module.exports = mongoose.model("User", UserSchema, "user");