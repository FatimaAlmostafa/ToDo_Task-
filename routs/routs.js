const  express = require('express');
const app = express()
const task = require('../controller/taskfunction');

////////// Create a new  task 
app.post('/task', task.Creat);

//////////////Retrieve one  task
app.get('/task',task.getTasks);

//////////////update task
app.put('/task/:id',task.update);

/////////////// delete task
app.delete('/task/:id',task.remove);

////////////////////////
module.exports = app;