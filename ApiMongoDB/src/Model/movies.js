const {Schema, model} = require("mongoose");
let mongoose = require('mongoose');

const movieSchema = new Schema ({
    portada : String,
    title: String,
    releaseYear: Number,
    actors : [String],
    nationality: String,
    director: [String],
    writer: [String],
    language: String,
    platform: String,
    isMCU: Boolean,
    mainCharacterName: String,
    producer: [String],
    distributor: String,
    genre : String,
})

module.exports = model("Movie", movieSchema, "pelicula");