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
    },
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: {
        type: String,
        enum: ['Admin','Owner','User', 'Dev']
        },
    address: String,
    phone: Number,
    email: {
            type: String,
            index: true,
            match: /.+\@.+\..+/
            },
    follow: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    photos: Array
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
    if(this.dateOfBirth > date)
    {
        console.log("Eres mayor de edad")
        next();
    }
    else
    {
        console.log("Solo mayores de edad")
    }
});

module.exports = mongoose.model("User", UserSchema, "user");