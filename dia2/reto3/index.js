let mongoose = require("mongoose");
let User = require("./user");
let Photo = require("./photos");

mongoose.connect('mongodb://localhost:27017/codenotch2', {useNewUrlParser: false, useUnifiedTopology: false});

///////////Subida de fotos

// function subirFoto(usuario,url,titulo,descripcion)
// {
//     let Photodocument = new Photo({
//         user: usuario,
//         url: url,
//         title: titulo,
//         description: descripcion
//     })
    
//     Photodocument.save(checkRespuesta);
// }


// subirFoto("Pepita111","urlde la foto","foto perfil","Esta va a ser la foto de perfil");

//////Obtener Fotos

// function obtenerFoto(usuario)
// {
//     Photo.findOne({user: usuario},
//             function(err,photo)
//             {
//                 if(err)
//                     console.log("Error usuario no encontrado");
//                 else
//                     console.log(photo)
//             })
// }

// obtenerFoto("Pepito322");

///////Seguir:

// function seguir(origen,destino)
// {
//     User.updateOne({login: origen}, {follow: destino}, checkRespuesta)
// }

// seguir("Pepa231","Pepe222");

// function checkRespuesta(err,res)
// {
//     if(err)
//         console.log("Error: "+err)
//     else{
//         console.log("Seguidor actualizado correctamente")
//     }
// };

/////Dejar de seguir:

// function dejaSeguir(origen, destino)
// {
//     User.findOne({login: origen},
//                 function(err,user)
//                 {
//                     if(err)
//                         console.log("Error");
//                     else if(user.follow == destino)
//                     {
//                         user.follow = '';
//                         console.log(user);
//                     }
//                     else
//                     {
//                         console.log(user)
//                     }
//                 }) 
// }


// dejaSeguir("Pepa231", "Pepe222")


/////Eliminar Foto

// function eliminarFoto(usuario,titulo)
// {
//     Photo.deleteOne({user: usuario, title:titulo},
//         function(err)
//         {
//             if(err)
//                 console.log("Error");
//             else
//             {
//                 console.log("Borrado correctamente")
//             }
//         })
// }

// eliminarFoto("Pepe321","Perfil")

///Eliminar todas las fotos

// function eliminarTodas(usuario)
// {
//     Photo.deleteMany({user: usuario},
//         function(err,datos)
//         {
//             if(err)
//                 console.log(err);
//             else
//             {
//                 console.log("Todos los datos borrados del usuario "+ usuario);
//                 console.log(datos);
//             }
//         })
// }

// eliminarTodas("Pepitoa325")