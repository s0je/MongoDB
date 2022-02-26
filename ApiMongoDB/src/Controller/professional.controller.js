const Professional = require("../Model/professional")

const getProfessional = async (req, res, next) =>{
    try{
        const professional = await Professional.find()
        res.send(200).json({message: professional});
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

module.exports = {getProfessional, postProfessional};