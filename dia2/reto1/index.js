let mongoose = require("mongoose");
let User = require("./UserSchema");
let Profile = require("./ProfileSchema");
let Creedentials = require("./CreedentialsSchema");

mongoose.connect('mongodb://localhost:27017/codenotch', {useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User({
    login: "Pepa231",
    password: "12345q"
});

let profileDocument = new Profile({
    name: "Pepa",
    surname: "Robles",
    dateOfBirth: "1986-06-20",
    comments: "ninguno",
    rol: "User"
})

let creedentialsDocument = new Creedentials({
    address: "calle larga 123",
    phone: +34666555333,
    email: "pepa@codenotch.com"
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