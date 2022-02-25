let express = require("express");
let app = express();
let cors = require("cors");
let mongoose = require('mongoose');

///Creacion de esquemas

const PhotoSchema = new mongoose.Schema({
    user: String,
    url: String,
    title: String,
    description: {
        type: String,
        validate: [
            function(description){
                return description.length >= 10;
            },
            'Descripcion demasiado corta '
        ]
    }
})

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        validate: [
        function(password){
            return password.length >= 6;
        },
        'El password deberia de ser mas largo ']
    },
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: {
        type: String,
        enum: ['Admin','Owner','User', 'Dev']
        },
    address: String,
    phone: Number,
    email: {
            type: String,
            index: true,
            match: /.+\@.+\..+/
            },
    follow: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    photos: [PhotoSchema]
})

let PhotoModel = mongoose.model("Photo", PhotoSchema, "photo");
let UserModel = mongoose.model("User", UserSchema, "user");

mongoose.connect('mongodb://localhost:27017/codenotch2', {useNewUrlParser: false, useUnifiedTopology:false});

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//GET/PHOTOS

app.get("/photos", 
        function(request, response)
        {
            if(request.body.user == null)
            {
                PhotoModel.find({})
                .then((user) =>
                {
                    console.log(user);
                    response.send(user);
                })
                .catch((err) =>
                {
                    console.log(err);
                    process.exit(-1);
                })
            }
            else
            {
                PhotoModel.findOne({user: request.body.user},
                    function(err,photo)
                    {
                        if(err)
                            console.log("Error usuario no encontrado");
                        else
                            console.log(photo)
                            response.send(photo)
                    })
            }   
        })

///POST/PHOTOS
        
app.post("/photos",
        function(request, response)
        {
            let Photodocument = new Photo({
                        user: request.body.user,
                        url: request.body.url,
                        title: request.body.title,
                        description: request.body.description
                    })
            Photodocument.save()
            .then((photo)=>
            {
                console.log("Foto guardada correctamente");
                response.send(photo);
            })
            .catch((err) =>
            {
                console.log("Error: "+err)
            })
                
        });

///DEL/PHOTOS

app.delete("/photos",
        function(request,response)
        {
            let title = request.body.title;
            let user = request.body.user;
            if(title == '')
                title = null;

            if(title == null)
            {
                PhotoModel.deleteMany({user: user},
                                    function(err,datos)
                                    {
                                        if(err)
                                            console.log(err);
                                        else
                                        {
                                            console.log("Todos los datos borrados del usuario "+ user);
                                            console.log(datos);
                                        }
                                    })
            }
            else 
            {
                PhotoModel.deleteOne({user: user, title:title},
                            function(err)
                            {
                                if(err)
                                    console.log("Error");
                                else
                                {
                                    console.log("Borrado correctamente")
                                }
                            })
            }
        })

//PUT/FOLLOW

app.put("/follow",
        function(request,response)
        {
            UserModel.updateOne({login: request.body.login }, {follow: request.body.follow})
            .then((user) =>
            {
                console.log("Usuario actualizado correctamente");
                response.send(user);
            })
            .catch((err) =>
            {
                console.log("Error: "+err)
            })
        })

//PUT/UNFOLLOW

app.put("/unfollow",
        function(request,response)
        {
            let origen = request.body.login;
            let destino = request.body.follow;
            UserModel.findOne({login: origen})
                                .then((user)=>
                                {
                                    if(user.follow == destino)
                                    {
                                        user.follow = '';
                                        console.log(user);
                                        response.send(user)
                                    }
                                    else
                                    {
                                        console.log(user)
                                    }
                                })
                                .catch((err) =>
                                {
                                    console.log("Error: "+err);
                                })
        })

//GET/TIMELINE

app.get("/timeline",
        function(request,response)
        {
                User.findOne({login: request.body.login})
                .populate('photos')
                .exec(function (err, user)
                {
                    if(err)
                        console.log(err);

                    console.log(`${user.login} tiene ${user.photos.length} fotos`); 
                    for(let j of user.photos)
                    {
                        console.log(j)
                        response.send(j)
                    }
                })
        })

app.listen(3000)