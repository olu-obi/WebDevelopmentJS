function square(num)
{
    num = num * num
    return num
}

//let number = prompt("Enter a whole number")
let number = 7
let result = square(number)
console.log(`${number} squared is ${result}`)

function addUp(...args)
{
    let sum = 0
    for (let n of args)
    {
        console.log(typeof n)
        sum += n
    }
    console.log(`Sum is ${sum}`)
}

addUp(1,2,3,4,5)