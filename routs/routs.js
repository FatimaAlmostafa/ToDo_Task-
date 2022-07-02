const  express = require('express');
const app = express()
const task = require('../controller/taskfunction');

const validateId=(req,res,next)=>{
    console.log(req.params.id)
    next()
}



// Create a new  task 
app.post('/', task.Creat);

//Retrieve one  task
app.get('/',validateId,task.getTasks);
//Retrieve all  task
app.get('/',task.getAll);
//update task
app.put('/:id',task.update);

// delete task
app.delete('/:id',task.remove);

///
module.exports = app;