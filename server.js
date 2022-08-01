

const express = require("express");

const app = express();

app.get("/",function(req, res){
  res.send("<h1> Hello World!! </h1>");
  // console.log(request);
})

app.get("/contact",function(req, res){
  res.send("<Strong>Contact me :</Strong> gauravkrthakur07@gmail.com");
})

app.get("/about",function(req, res){
  res.send("<Strong>About me :</Strong> My name is Gaurav Kumar Thakur ");
})

app.get("/daily",function(req, res){
  res.send("<ul><li>Eat</li><li>Code</li><li>sleep</li></ul>  REPEAT");
})

app.listen(3000,function(){
  console.log("Server has started at port 3000");
})
