const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fatom');

const  db = mongoose.connection

db.on('error', function () {
  console.log('mongoose connection error')
})

db.once('open', function () {
  console.log('mongoose connected successfully')
})


///////////ctreat task schema
const taskSchema =new mongoose.Schema({
    title:{
        type: String,
        max: 200,
        required:true
    },
    desc:{
        type:String,
        max:500,
        required:true
    },
    isComplete:{
        type :Boolean,
        default: false
    },
    createdAt :{
        type: Date,
        default: Date.now()
    },
    modifiedAt: {
        type: Date,
        default: Date.now()
    }

  });
  const Task = mongoose.model('Task',taskSchema)


  module.exports = {Task ,db }
  