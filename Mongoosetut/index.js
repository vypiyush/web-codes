// TAKE REFERENCE FROM THE MONGOOSE NODEJS WEBSITE AND CWH
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting = "My name is " + this.name
  console.log(greeting);
};

var Kitten = mongoose.model('harryKitty', kittySchema);
var harryKitty = new Kitten({ name: 'harryKitty' });
var harryKitty2 = new Kitten({ name: 'harryKitty2' });
// console.log(harryKitty.name);
// harryKitty.speak();

harrykitty.save(function (err, harrykitty) {
  if (err) return console.error(err);
  // harrykitty.speak();
});
harrykitty.save(function (err, k) {
  if (err) return console.error(err);
  // k.speak();
});

Kitten.find( {name: "harryKitty", function (err,kittens) {
  if(err) return console.error(err);
  console.log(kittens);
}})