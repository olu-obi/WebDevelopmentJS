for(let i = 1;i < 10; i++) {
    console.log(i);
}

let x = 2;
let loopCounter = 0;

while(x < 10000) {
    x *= x;
    loopCounter++;
    console.log(`x is ${x}`);
    console.log(`loopCounter is ${loopCounter}`);
}

const units = ['','one','two','three','four','five','six','seven','eight','nine','ten']
const tens = ['','ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety','hundred']
const oddities = {11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventren',18:'eighteen',19:'nineteen'}

for (let num1 = 1; num1<=10; num1++)
{
    for (let num2 = 1; num2<=10; num2++)
    {
        res=num1 * num2
        if (res in oddities)
        {
            console.log(`${units[num1]} * ${units[num2]} = ${oddities[res]}`)
        }
        else
        {
        console.log(`${units[num1]} * ${units[num2]} = ${tens[(res/10)|0] + ' ' + units[res % 10]}`)
        }
    }
}
