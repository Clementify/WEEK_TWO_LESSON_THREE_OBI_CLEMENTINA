
// Use the "for...of" loop for iterable objects
// Create an iterable object, such as an array or string.
// Use a "for...of" loop to iterate over the elements of the object and perform actions based on each element.


const numbers = [20, 23, 40, 47, 50, 55, 70]

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(`${number} is even`)
  } else {
    console.log(`${number} is odd`)
  }
}