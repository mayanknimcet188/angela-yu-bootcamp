//jshint esversion:6
const express = require('express');
const app = express();

app.get("/",function(req,res){
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at: mayank@example.com");
});

app.get("/about", function(req,res){
  res.send("I am an aspiring developer learning Node.js!");
});

app.get("/hobbies", function(req,res){
  res.send("<ul><li>Reading</li><li>Coding</li><li>CPU Design</li></ul>");
});
app.listen(3000,function() {
  console.log("Server started on port 3000");
});
