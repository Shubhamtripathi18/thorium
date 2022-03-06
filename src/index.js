const express = require('express');
const moment= require("moment")
const requestIp=require("request-ip");
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app  = express();

app.use(bodyParser.json());
app.use(requestIp.mw({attributeName:'myIp'}))
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Shubhamtripathi:x7hZhxOWH9p6vHPT@thoriumbe.jzzvr.mongodb.net/Shubhamtripathi", {
    useNewUrlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const globalmiddleware=function(req,res,next){
   
    let newData=moment().format('YYYY-MM-DD HH:mm:ss:a');
    let ip=req.myIp;
    let apiMy=req.originalUrl;
    console.log(newData,ip,apiMy)
      next()
  }


app.use(globalmiddleware);
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
