let mongoose = require("mongoose");
let User = require("./UserSchema");
let Profile = require("./ProfileSchema");
let Creedentials = require("./CreedentialsSchema");

mongoose.connect('mongodb://localhost:27017/codenotch', {useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User({
    logim: "Pepito23",
    password: "12345p"
});

let profileDocument = new Profile({
    name: "Pepito",
    surname: "Peres",
    dateOfBirth: "1986-06-20",
    comments: "ninguno",
    rol: "dev"
})

let creedentialsDocument = new Creedentials({
    address: "calle larga 123",
    phone: 666555444,
    email: "pepito@codenotch.com"
})

userDocument.save(checkRespuesta)

function checkRespuesta(err,res)
{
    if(err)
        console.log("Error: "+ err)
    else
    {
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}

profileDocument.save(checkRespuesta)

function checkRespuesta(err,res)
{
    if(err)
        console.log("Error: "+ err)
    else
    {
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}

creedentialsDocument.save(checkRespuesta)

function checkRespuesta(err,res)
{
    if(err)
        console.log("Error: "+ err)
    else
    {
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}