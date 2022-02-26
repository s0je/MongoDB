let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ApiIMDB', {useNewUrlParser: false, useUnifiedTopology:false})
.then((db) =>{console.log("database connected on ", db.connection.host)})
.catch((err) =>{console.log(err)})