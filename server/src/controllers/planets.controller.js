const {habitablePlanets} = require('../models/planets.model');


const getPlanetsData=(req,res)=>{
    return res.status(200).json(habitablePlanets);

};



module.exports={
    getPlanetsData
}