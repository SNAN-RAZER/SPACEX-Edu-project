
const  {getAllLaunches,

    addLaunch,
    delelaunchData
}  =require('../models/launches.model')



const getAllLaunchesData=(req,res)=>{

    return res.status(200).json(Array.from(getAllLaunches().values()));
}

const addlaunchData=(req,res)=>{
    const launchData=req.body;

  
    if(!launchData.mission || !launchData.rocket || !launchData.target )
    {
        return res.status(400).json({"message":"Missing required launch data"});

    }

    if(new Date(launchData.launchDate).toString()==='Invalid Date')
    {
        return res.status(400).json({"Message":"Invalid Date"})
    }

    addLaunch(launchData);
    return res.status(201).json({"message":"Added successfully"});
}
;

const deletelaunchData=(req,res)=>{
    const flightNumber=+req.params.id;
    delelaunchData(flightNumber);
    return res.status(200).json({message:"Deleted sucessfully"})
    
}
module.exports={
    getAllLaunchesData,
    addlaunchData,
    deletelaunchData,
}