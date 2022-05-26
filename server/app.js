const express = require('express');

const app =express();
const cors = require('cors');
const morgan = require('morgan');
const { planetsRouter } = require('./src/routes/planets.routes');
const { launchesRouter } = require('./src/routes/launches.routes');


app.use(express.json());
app.use('/planets',cors(),planetsRouter);
app.use('/launches',cors(),launchesRouter);
app.use(morgan('tiny'))



module.exports=app;



