let numTest // 45.324568
numTest = 45.324568
console.log(numTest) // 45.324568

let twoDecimals = numTest.toFixed(2) // "45.32"
console.log(twoDecimals) // "45.32"

let strTest = "i am the very model of a modern major general" // "i am the very model of a modern major general"
let indexOfM = strTest.indexOf("m") // 7
console.log(indexOfM) // 7

let strStart = strTest.indexOf("model") // 15
let strEnd = strTest.indexOf("major") // 30
let strSub = strTest.substring(strStart,strEnd) // "model of a modern major"
console.log(strSub) // "model of a modern major"

document.write("<p1>" + strSub.toUpperCase() + "</p1>") // "<p1>MODEL OF A MODERN MAJOR</p1>"