const mongoose = require("mongoose");

const MascotaSchema = new mongoose.Schema({

    nombre: String,
    edad: Number,
    dueños: [{type: mongoose.Schema.Types.ObjectId, ref: "DueñoMucho"}]
})

module.exports = mongoose.model("MascotasMucho", MascotaSchema, "mascota");