let mongoose = require("mongoose");
let User = require("./user");
let Photo = require("./photos");

mongoose.connect('mongodb://localhost:27017/codenotch2', {useNewUrlParser: false, useUnifiedTopology: false});

// let Photodocument = new Photo({
//     user: "Pepe111",
//     url: "https://www.freepik.es/foto-gratis/retrato-estudio-hombre-moreno-confianza_1027736.htm#query=hombre&position=4&from_view=keyword",
//     title: "Perfil",
//     description: "Foto de perfil para linkedin"
// })

// let photosTemp = [];

// Photodocument.save()
//     .then( (foto) =>
//     {
//         console.log('Foto guardada');
//         photosTemp.push(foto)
//         Photodocument = new Photo ({user: 'Pepe333', url: 'Foto url', title: 'Casa', description:'Esta es la foto de la casa'})
//         return Photodocument.save();
//     })
//     .then((foto) =>
//     {
//         console.log('Foto guardada');
//         photosTemp.push(foto)
//         Photodocument = new Photo ({user: 'Pepe444', url: 'Foto url', title: 'Coche', description:'Esta es la foto de la coche'})
//         return Photodocument.save();
//     })
//     .then((foto)=>
//     {
//         console.log('Foto guardada');
//         photosTemp.push(foto)
//         let Usuario = new User ({
//             login: "Pepa543",
//             password: "12345q1",
//             name: "Pepe",
//             surname: "Robles",
//             dateOfBirth: "1986-06-20",
//             comments: "ninguno",
//             rol: "User",
//             address: "calle larga 123",
//             phone: +34666555333,
//             email: "pepa@codenotch.com",
//             follow: ['6214e3d1ec73d14086269ae2','6214f26f3c8e356f66c58e34'],
//             photos: photosTemp
//         });
//         return Usuario.save()
//     })
//     .then((usuario) =>
//     {
//         console.log("Usuario guardaddo correntamente")
//     })
//     .catch((err) =>
//     {
//         console.log(err)
//     })

function timeline()
{
    User.findOne({login: "Pepa543"})
    .populate('photos')
    .exec(function (err, user)
    {
        if(err)
            console.log(err);

        console.log(`${user.login} tiene ${user.photos.length} fotos`); 
        for(let j of user.photos)
        {
            console.log(j)
        }
})
}

timeline();