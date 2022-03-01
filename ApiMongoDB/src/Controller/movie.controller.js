const Movie = require("../Model/movies")

////GET/MOVIE

const getMovie = async (req, res, next) =>{
    try{
        let id =  req.query.id;
        if(id == null)
        {
            const movie = await Movie.find()
                res.send(movie);
        }
        else{
            const movie = await Movie.findOne({_id : id})
                res.send(movie);
        }
                
    }
    catch(err){
        console.log(err)
        next(err);
    }
}

///GET/MOVIE/ACTORS

const getActors = async (req,res,next) =>
{
    try{
        let id =  req.query.id;
        let temp= '';
        Movie.findOne({_id: id})
        .populate('actors')
        .exec(function (err, movie)
        {
            if(err)
                console.log(err);

            console.log(`${movie.title} tiene ${movie.actors.length} actores principales`); 
            for(let j of movie.actors)
            {
                temp += `\n${j}`    
            }
            console.log(temp)
            res.send(movie.actors)
        })
                                
    }
    catch(err){
        console.log(err)
        next(err);
    }
}


//GET/DiRECTORS/MOVIE

const getDirectors = async (req,res,next) =>
{
    try{
        let id =  req.query.id;
        let temp= '';
        Movie.findOne({_id: id})
        .populate('director')
        .exec(function (err, movie)
        {
            if(err)
                console.log(err);

            console.log(`${movie.title} tiene ${movie.director.length} directores`); 
            for(let j of movie.director)
            {
                temp += `\n${j}`    
            }
            res.send(movie.director)
        })
                                
    }
    catch(err){
        console.log(err)
        next(err);
    }
}

///GET/WRITER/MOVIE

const getWriter = async (req,res,next) =>
{
    try{
        let id =  req.query.id;
        let temp= '';
        Movie.findOne({_id: id})
        .populate('writer')
        .exec(function (err, movie)
        {
            if(err)
                console.log(err);

            console.log(`${movie.title} tiene ${movie.writer.length} guionistas`); 
            for(let j of movie.writer)
            {
                temp += `\n${j}`    
            }
            res.send(movie.writer)
        })
                                
    }
    catch(err){
        console.log(err)
        next(err);
    }
}

//GET/PRODUCER/MOVIE

const getProducer = async (req,res,next) =>
{
    try{
        let id =  req.query.id;
        let temp= '';
        Movie.findOne({_id: id})
        .populate('producer')
        .exec(function (err, movie)
        {
            if(err)
                console.log(err);

            console.log(`${movie.title} tiene ${movie.producer.length} productores`); 
            for(let j of movie.producer)
            {
                temp += `\n${j}`    
            }
            res.send(temp)
        })
                                
    }
    catch(err){
        console.log(err)
        next(err);
    }
}

///////POST/MOVIE

const postMovie = async (req, res, next) =>{
    const {portada,title,releaseYear,actors,nationality,director,writer,language,platform,isMCU,mainCharacterName,producer,distributor,genre} =req.body
    try{
        const movie = new Movie ({portada,title,releaseYear,actors,nationality,director,writer,language,platform,isMCU,mainCharacterName,producer,distributor,genre});
        const movieSave = await movie.save();
        res.send(201).json({message: movieSave})
    }
    catch (err)
    {
        next(err)
    }
}

///POST/MOVIE/ACTORS

const postActors = async (req, res, next) =>{
    const actors =req.body.actors
    let id = req.query.id
    try{
        const movie = await Movie.updateOne({_id: id}, {$addToSet: {actors: actors}});
        res.send(movie);
    }
    catch (err)
    {
        next(err)
    }
}

///POST/MOVIE/DIRECTOR

const postDirector = async (req, res, next) =>{
    const director =req.body.director
    let id = req.query.id
    try{
        const movie = await Movie.updateOne({_id: id}, {$addToSet: {director: director}});
        res.send(movie);
    }
    catch (err)
    {
        next(err)
    }
}

///POST/MOVIE/WRITER

const postWriter = async (req, res, next) =>{
    const writer =req.body.writer
    let id = req.query.id
    try{
        const movie = await Movie.updateOne({_id: id}, {$addToSet: {writer: writer}});
        res.send(movie);
    }
    catch (err)
    {
        next(err)
    }
}

///PUT/MOVIE

const putMovie = async (req, res, next) =>{
    const {portada,title,releaseYear,actors,nationality,director,writer,language,platform,isMCU,mainCharacterName,producer,distributor,genre} =req.body;
    let id = req.query.id
    let objForUpdate = {};
    if(portada!= '')
        objForUpdate.portada = portada;
    if(title!= '')
        objForUpdate.title = title;
    if(releaseYear!='')
        objForUpdate.releaseYear = releaseYear;
    if(actors!='')
        objForUpdate.actors = actors;
    if(nationality!='')
        objForUpdate.nationality = nationality;
    if(director!='')
        objForUpdate.director = director;
    if(writer!='')
        objForUpdate.writer = writer;
    if(language!='')
        objForUpdate.race = race;
    if(platform!='')
        objForUpdate.platform = platform;
    if(isMCU!='')
        objForUpdate.isMCU = isMCU;
    if(mainCharacterName!='')
        objForUpdate.mainCharacterName = mainCharacterName;
    if(producer!='')
        objForUpdate.producer = producer;
    if(distributor!='')
        objForUpdate.distributor = distributor;
    if(genre!='')
        objForUpdate.genre = genre;

    objForUpdate = {$set: objForUpdate};
    try
    {
        const movie = await Movie.updateOne({_id: id}, objForUpdate)
        console.log("produceral actualizado correctamente");
        res.send(movie)
    }
    catch(err)
    {
        next(err)
    }
}

///DELETE/MOVIE

const delMovie = async (req, res, next) =>
{
    let id =  req.query.id;
    try
    {
        const movie = await Movie.deleteOne({_id: id})
        res.send(movie)
    }
    catch(err)
    {
        next(err)
    } 
}

///DELETE/MOVIE/ACTORS

const delActors = async (req, res, next) =>
{
    let id =  req.query.id;
    let actors = req.body.actors
    try
    {
        const movie = await Movie.updateOne({_id: id}, {$pull: {actors: actors}})
        res.send(movie)
    }
    catch(err)
    {
        next(err)
    } 
}

///DELETE/MOVIE/DIRECTOR

const delDirector = async (req, res, next) =>
{
    let id =  req.query.id;
    let director = req.body.director
    try
    {
        const movie = await Movie.updateOne({_id: id}, {$pull: {director: director}})
        res.send(movie)
    }
    catch(err)
    {
        next(err)
    } 
}

///DELETE/MOVIE/WRITER

const delWriter = async (req, res, next) =>
{
    let id =  req.query.id;
    let writer = req.body.writer
    try
    {
        const movie = await Movie.updateOne({_id: id}, {$pull: {writer: writer}})
        res.send(movie)
    }
    catch(err)
    {
        next(err)
    } 
}

module.exports = {getMovie, postMovie, putMovie, delMovie, getActors, getDirectors, getProducer, getWriter, postActors, postDirector, postWriter, delActors, delDirector, delWriter};