const express = require('express')
const app = express()
var config = require('./data.json');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', function (req, res, next) {
    res.send(config)
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})