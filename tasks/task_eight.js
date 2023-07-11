
// Use nested loops
// Create a nested loop structure to generate a multiplication table.
// Use two "for" loops to iterate over values from 1 to 10 and calculate the product of each combination.

let num = 10

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    const result = i * j

    console.log(result)
  }
}