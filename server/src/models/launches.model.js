const launches = new Map();

let latestFlightNumber = 100;

const launch={
    flightNumber:100,
    mission:"Kelper Exploration X",
    rocket:"Explorer IS1",
    launchDate:new Date('May 11 2022'),
    destination:'Kelper-442 b',
    customer:['ZTM',"NASA"],
    upcoming:true,
    success:true
}
launches.set(launch.flightNumber,launch);

const getAllLaunches=()=>{
return launches;
}

const addLaunch=(launchData)=>{
    latestFlightNumber+=1;
    launches.set(latestFlightNumber,{
        flightNumber:latestFlightNumber,
        mission:launchData.mission,
        rocket:launchData.rocket,
        launchDate:launchData.launchDate,
        destination:launchData.target,
        customer:['ZTM',"NASA"],
        upcoming:true,
        success:true
    });

    

};

const delelaunchData=(number)=>{
   launches.set(number,{
       ...launches.get(number),
       upcoming:false,
        success:false

   });
}

module.exports={
    getAllLaunches,
    addLaunch,
    delelaunchData
};