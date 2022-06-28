const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const routes = require('./routs/routs')
require('dotenv').config()

var jsonParser = bodyParser.json()
app.use(jsonParser)
app.use('/',routes)


 const port = process.env.PORT || 3000 ;
  app.listen(port ,()=> console.log(`listening on port ${port}..`)
   )