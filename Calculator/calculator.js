const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  // res.send("Hello World");
  res.sendFile(__dirname+"/index.html");
})

app.get("/bmiCalculator",function(req,res){
  // res.send("BMI Calculator");
  res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmiCalculator",function(req,res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight/(height*height);

  res.send("Your BMI is : "+bmi);
})

app.post("/", function(req, res){
  // res.send("HI You are here");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The Addition of these num are : "+result);
})

app.listen(3000,function(){
  console.log("Server has been started");
})
