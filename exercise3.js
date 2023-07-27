// No 1. Write a code to display the multiplication table of a given integer

const number = parseInt(prompt("Enter an integer:"));

console.log(`Multiplication Table for ${number}`);
console.log("---------------------------");

for (let i = 1; i <= 10; i++) {
  const product = number * i;
  console.log(`${number} x ${i} = ${product}`);
}