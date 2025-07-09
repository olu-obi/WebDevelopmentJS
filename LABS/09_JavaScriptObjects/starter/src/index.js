let darthVader = 
{ 
    allegiance: "Empire", 
    weapon:"Lightsaber", 
    sith: true 
}
console.log(darthVader);
console.log(`Darth Vader's allegiance is ${darthVader.allegiance}`); //(darthVader.allegiance)
console.log(`Darth Vader's weapon is ${darthVader.weapon}`); // (darthVader.weapon)
console.log(`Darth Vader is a Sith? ${darthVader.sith}`); // (darthVader.sith)
console.log(`Jedi from Darth Vader? ${darthVader.jedi}`); // undefined
console.log(Object.keys(darthVader).length); // returns an array of keys

darthVader.children = 2 // adding a new property
darthVader.childNames = ["Luke", "Leia"] // adding a new property
console.log(`Darth Vader's first child is ${darthVader.childNames[0]}`); // (darthVader.childNames[0])

for (let key in darthVader)
{
    console.log(`Darth Vader's ${key} is ${darthVader[key]}`); // (darthVader[key])
}
darthVader.allegiance = "The light side"; // changing a property
console.log(darthVader)
delete darthVader.children // deleting a property
console.log(darthVader)

let {allegiance, weapon, sith, childNames} = darthVader; // destructuring
console.log(allegiance)
console.log(weapon)
console.log(sith)
console.log(childNames)

darthVader = {}
console.log(darthVader)`` // empty object
