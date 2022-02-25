let mongoose = require("mongoose");
let Hijo = require("./HijoSchema");
let Padre = require("./PadreSchema")
let Dueño = require("./DueñoSchema")
let Mascota = require("./MascotaSchema")

mongoose.connect('mongodb://localhost:27017/codenotch2', {useNewUrlParser: false, useUnifiedTopology: false});

/// ONE TO ONE

Hijo.findOne({nombre: "Pepito"})
    .populate('padre')
    .exec(function(err,hijo)
    {
        if(err)
            console.log(err)
        console.log(`El padre de ${hijo.nombre} es ${hijo.padre.nombre}`);
    })

/// ONE TO MANY


Padre.findOne({nombre: "Carlos"})
    .populate('hijos')
    .exec(function (err, padre)
    {
        if(err)
            console.log(err);

        console.log(`${padre.nombre} tiene ${padre.hijos.length} hijos`);
        for(let i=0; i<padre.hijos.length; i++)
        {
            console.log(`${padre.hijos[i].nombre} es su hijo`)
        }
    })


/// MANY TO MANY

Dueño.findOne({nombre: "Juan"})
    .populate('mascotas')
    .exec(function (err, dueño)
    {
        if(err)
            console.log(err);
        console.log(`${dueño.nombre} tiene ${dueño.mascotas.length} mascotas`)
    })

Mascota.findOne({nombre:"Rex"})
    .populate('dueños')
    .exec(function (err, mascota)
    {
        if(err)
            console.log(err);
        console.log(`${mascota.nombre} tiene ${mascota.dueños.length} dueños`)
    })