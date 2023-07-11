
// Use a "for...in" loop to iterate over an object
// Create an object with key-value pairs representing personal information (name, age, city, etc.).
// Use a "for...in" loop to iterate over the object and log each key-value pair to the console.

const person = {firstname:"Obi", lastname:"Clementina", location:"Awka", age:25};
 let text = "";
 for (let c in person) {
  text += person[c];
  console.log([c]);
}