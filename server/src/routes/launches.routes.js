const express  = require('express');
const {    
getAllLaunchesData,
addlaunchData,
deletelaunchData

}=require('../controllers/launches.controller');
console.log(getAllLaunchesData);
const launchesRouter=express.Router();

launchesRouter.get('/',getAllLaunchesData);
launchesRouter.post('/',addlaunchData);
launchesRouter.delete('/:id' ,deletelaunchData);
module.exports={
    launchesRouter,
}