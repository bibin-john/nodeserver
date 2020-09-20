const express = require('express')
const app = express()
const port =  process.env.PORT || 8081

// APP START
app.listen(port, () => {
  console.log(`Node Server listening at http://localhost:${port}`)
});

//CORS
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
 
global.__basedir = __dirname;

//DATABASE
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 
 
//ROUTING

let appRouter = require('./app/routers/app.router.js');
app.use('/apps', appRouter);
let apiRouter = require('./app/routers/api.router.js');
app.use('/apis', apiRouter);


//NOTIFICATION
app.get('/notification', (req, res) => {
  res.send('Notification msg 4')
})


// EXCEPTION HANDLING
process.on('uncaughtException', (ex) => {
    console.log('Process uncaughtException', ex);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  })
});

//process.kill(process.pid, 'SIGTERM')