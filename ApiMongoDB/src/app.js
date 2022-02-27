let express = require("express");
let app = express();
let cors = require("cors"); 
const profesionalRoutes= require("./Routes/professional.routes");
const moviesRoutes = require("./Routes/movie.routes")
const errorHanding = require("./error/errorHanding");

//Config
app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(profesionalRoutes);
app.use(moviesRoutes);
app.use((req,res,next) =>{
    res.status(404).json({message: "endpoint doesn't found"})
})

app.use(errorHanding);

module.exports = app;