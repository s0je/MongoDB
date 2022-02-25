const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    user: String,
    url: String,
    title: String,
    description: {
        type: String,
        validate: [
            function(description){
                return description.length >= 10;
            },
            'Descripcion demasiado corta '
        ]
    }
})

PhotoSchema.pre('save', function(next)
{
    console.log("Middleware de entrada User")
    if(this.user.length >= 5 )
    {
        console.log("Usuario correcto")
        next();
    }
    else
    {
        console.log("Usuario demasiado corto")
    }    
    
});

module.exports = mongoose.model("Photo", PhotoSchema, "photo")