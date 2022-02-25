const mongoose = require("mongoose");

const HijoSchema = new mongoose.Schema({
    nombre : String,
    apellido: String,
    edad: Number,
    padre: {type: mongoose.Schema.Types.ObjectId, ref: "PadreUno"}
})


module.exports = mongoose.model("Hijo", HijoSchema, "hijo");

