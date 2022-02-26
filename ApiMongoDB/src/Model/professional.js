const {Schema, model} = require("mongoose");

const professionalSchema = new Schema({
    image: String,
    name : String,
    age : Number,
    genre : String,
    weight : Number,
    height : Number,
    hairColor : String,
    race : String,
    isRetired : Boolean,
    nationality : String,
    oscarsNumber : Number,
    profesion : String
})

module.exports = model("Professional", professionalSchema, "profesional");