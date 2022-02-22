let mongoose = require("mongoose");
let User = require("./user");
let Photo = require("./photos");

mongoose.connect('mongodb://localhost:27017/codenotch2', {useNewUrlParser: false, useUnifiedTopology: false});

let data ={
    login: "Pepe222",
    password: "12345q1",
    name: "Pepe",
    surname: "Robles",
    dateOfBirth: "1986-06-20",
    comments: "ninguno",
    rol: "User",
    address: "calle larga 123",
    phone: +34666555333,
    email: "pepa@codenotch.com",
    follow: ""
};

// let Photodocument = new Photo({
//     user: "Pepe321",
//     url: "https://www.freepik.es/foto-gratis/retrato-estudio-hombre-moreno-confianza_1027736.htm#query=hombre&position=4&from_view=keyword",
//     title: "Perfil",
//     description: "Foto de perfil para linkedin"
// })

// Photodocument.save(checkRespuesta);

// function checkRespuesta(err,res)
// {
//     if(err)
//         console.log("Error: "+err)
//     else{
//         console.log("Photo guardada correctamente")
//     }
// };

let document = new User(data);

document.save()
    .then(function()
    {
        console.log("Usuario guardado correctamente");
    })
    .catch(function(){
        console.log("Error al guardar el documento");
    })