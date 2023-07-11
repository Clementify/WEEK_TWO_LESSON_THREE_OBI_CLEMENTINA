
// Use array methods for iteration
// Create an array of names.
// Use array methods like forEach(), map(), or filter() to perform specific actions on the array elements.


//forEach
const names = ["Rita", 'Ebere', 'Francis', 'Manuel']

names.forEach(function (names) {
  console.log(names)
})


//map
const fullNames = names.map((names) => {
  const result = `Ada ${names}`
  console.log(result);
  return result
})
console.log(fullNames)

//filter
const filteredName = names.filter((names) => {
  return names.length < 5
})
console.log(filteredName)