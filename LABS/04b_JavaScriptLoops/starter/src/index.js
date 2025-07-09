/*
for (let i = 1;i <10; i++)
{
console.log(i)
}// This is a single line comment
*/

let x = 2 
let loopCounter = 0 // Initialize loop counter

while (x < 10000) // Loop until x is less than 10000
{
    x *= x // Square x
    loopCounter++ // Increment loop counter
    console.log(`x is ${x}`) // Output the value of x
    //or console.log("x is" + x)
    console.log(`Loop is ${loopCounter}`) // Output the loop counter
}
