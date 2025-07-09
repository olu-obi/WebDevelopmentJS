function geid(id)
{
    return document.getElementById(id)
}

geid("button1").addEventListener("click",countUp)
//document.getElementById(button1).addEventListener("click",countUp)

let counter = 0
function countUp(event)
{
    counter++
    if (counter)
    {
        geid("desc").textContent = `Counter = ${counter}`
    }
}