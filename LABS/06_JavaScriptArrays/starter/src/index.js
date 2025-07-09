let qoute = Array("I", "am", "your", "friend") // Array is a collection of items
console.log(qoute) // ["I", "am", "your", "friend"]
console.log(qoute[2]) // "your" - Accessing an item in the array by index
qoute.pop() // Removes the last item in the array
console.log(qoute) // ["I", "am", "your"]
qoute.push("father") // Adds an item to the end of the array
console.log(qoute) // ["I", "am", "your", "father"]
qoute.unshift("Luke") // Adds an item to the beginning of the array
console.log(qoute) // ["Luke", "I", "am", "your", "father"]
let erroneousWord = "Luke" // This is the word we want to find and replace
let lukeIsHere = qoute.find(n => {return n === erroneousWord}) // Checks if the word is in the array
let lukeIsAt // This will hold the index of the word in the array
if (lukeIsHere) // If the word is found in the array
{
    lukeIsAt = qoute.findIndex(n => {return n === erroneousWord})
    qoute[lukeIsAt] = "No"
} // Replace the word with "No"
console.log(qoute) 

let output = ""
for (let i=0; i<qoute.length; i++)
{
   if (i===qoute.length-1)
   {
    output += qoute[i] + "!"
   }
   else if (qoute[i] === "No")
   {
    output += qoute[i] + ", "
   }
   else
   {
    output += qoute[i] + "  "
}
}
console.log(output)