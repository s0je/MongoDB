const mongoose = require("mongoose");

const DueñoSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    direccion: String,
    mascotas: [{type: mongoose.Schema.Types.ObjectId, ref: "MascotasMucho"}]
})

module.exports = mongoose.model("DueñoMucho", DueñoSchema, "dueño");