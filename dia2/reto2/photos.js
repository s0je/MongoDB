const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    user: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
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

module.exports = mongoose.model("Photo", PhotoSchema, "photo")