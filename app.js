const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const routes = require('./routs/routs')
require('dotenv').config()

var jsonParser = bodyParser.json()
app.use(jsonParser)
app.use('/task',routes)

const errMiddleware = (err, req, res, next) => {
    res.status(400).json({ err: err });
  };
  app.use(errMiddleware);
  


 const port = process.env.PORT || 3000 ;
  app.listen(port ,()=> console.log(`listening on port ${port}..`)
   )