const mongoose = require("mongoose");

const PadreSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    hijos: [{type: mongoose.Schema.Types.ObjectId, ref:"Hijo"}]
})


PadreSchema.pre('save', function(next)
{
    console.log("Middleware de entrada User")
    if(this.edad >= 18 )
    {
        console.log("El padre es mayor de edad")
        next();
    }
    else
    {
        console.log("Solo mayores de edad")
    }
});

module.exports = mongoose.model("PadreUno", PadreSchema, "padre")