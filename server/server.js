const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./src/models/planets.model');
const PORT = 5000;
const server = http.createServer(app);


const startServer=async ()=>{
    await loadPlanetsData();
    server.listen(PORT,()=>{
        console.log("Server is listening");
    })
}


startServer();



