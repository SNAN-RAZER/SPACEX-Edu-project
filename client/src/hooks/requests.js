const API_URL='http://localhost:5000'

async function httpGetPlanets() {
  const response  = await fetch(`${API_URL}/planets`);

  return await response.json();
}

async function httpGetLaunches() {
  const response  = await fetch(`${API_URL}/launches`);
  let flightData= await response.json()
  console.log(flightData);
  return  flightData.sort((a,b)=>a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try{
    return  await fetch(`${API_URL}/launches`,
  
    {   method: 'POST',
       body:JSON.parse(launch)
     
     }
     );
  }
  catch(err)
  {
    return {
      ok:false
    }
  }
 
  
  
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.

  try{

    return await fetch(`${API_URL}/launches/${id}`
    ,
    {
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      }
    }
    
    
    );
  }
  catch(err)
  {
    return {
      ok:false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};