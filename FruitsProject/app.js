//jshint esversion: 6
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true, useUnifiedTopology: true});
//Schema for our fruitsDB
const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true,'name is required']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});
//creating a model

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Great fruit"
});

const Person = mongoose.model("Person",personSchema);


const pineapple = new Fruit(
  {
    name: "Pineapple",
    rating: 9,
    review: "Great Fruit"
  }
);
//pineapple.save();
const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Great fruit"
});
//orange.save();

Person.updateOne({name: "John"},{favouriteFruit: orange},function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Document updated successfully");
  }
});
const person = new Person({
  name: "Mayank",
  age: 24,
  favouriteFruit: pineapple
});
//person.save();
//fruit.save();


// Fruit.find(function(err,fruits){
//   if(err){
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     fruits.forEach(
//       function(item){
//         console.log(item.name);
//       }
//     );
//   }
// });
