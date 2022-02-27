const Professional = require("../Model/professional")

const getProfessional = async (req, res, next) =>{
    try{
        let id =  req.query.id;
        if(id == null)
        {
            const professional = await Professional.find()
                res.send(professional);
        }
        else{
            const professional = await Professional.findOne({_id : id})
                res.send(professional);
        }
                
    }
    catch(err){
        next(err);
    }
}

const postProfessional = async (req, res, next) =>{
    const {image, name, age, genre, weight, height, hairColor, race, isRetired, nationality, oscarNumber, profesion} =req.body
    try{
        const professional = new Professional ({image, name, age, genre, weight, height, hairColor, race, isRetired, nationality, oscarNumber, profesion});
        const professionalSave = await professional.save();
        res.send(201).json({message: professionalSave})
    }
    catch (err)
    {
        next(err)
    }
}

const putProfessional = async (req, res, next) =>{
    const {image, name, age, genre, weight, height, hairColor, race, isRetired, nationality, oscarNumber, profesion} =req.body;
    let id = req.query.id
    let objForUpdate = {};
    if(image!= '')
        objForUpdate.image = image;
    if(name!= '')
        objForUpdate.name = name;
    if(age!='')
        objForUpdate.age = age;
    if(genre!='')
        objForUpdate.genre = genre;
    if(weight!='')
        objForUpdate.weight = weight;
    if(height!='')
        objForUpdate.height = height;
    if(hairColor!='')
        objForUpdate.hairColor = hairColor;
    if(race!='')
        objForUpdate.race = race;
    if(isRetired!='')
        objForUpdate.isRetired = isRetired;
    if(nationality!='')
        objForUpdate.nationality = nationality;
    if(oscarNumber!='')
        objForUpdate.oscarNumber = oscarNumber;
    if(profesion!='')
        objForUpdate.profesion = profesion;

    objForUpdate = {$set: objForUpdate};
    try
    {
        const professional = await Professional.updateOne({_id: id}, objForUpdate)
        console.log("Profesional actualizado correctamente");
        res.send(professional)
    }
    catch(err)
    {
        next(err)
    }
}

const delProfessional = async (req, res, next) =>
{
    let id =  req.query.id;
    try
    {
        const professional = await Professional.deleteOne({_id: id})
        res.send(professional)
    }
    catch(err)
    {
        next(err)
    }
    
}


module.exports = {getProfessional, postProfessional, putProfessional, delProfessional};