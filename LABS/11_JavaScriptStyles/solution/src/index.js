// Set up code - do not remove
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);
// Do not alter lines of code 2-4!

// Steps 5-7
const blueParagraph = document.querySelector("#blueText");
console.log(blueParagraph.style.color);
console.dir(getComputedStyle(blueParagraph).color);

// Step 8
function blueToRed() {
    blueParagraph.style.color = "red";
    console.log(blueParagraph.style.color);
    console.log(getComputedStyle(blueParagraph).color);
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
};

// Steps 10, 11
const greenParagraphs = document.querySelectorAll(".greenBg");

console.log(greenParagraphs[0].style.backgroundColor);
console.dir(getComputedStyle(greenParagraphs[0]).backgroundColor);

// Step 12
function greenToPink() {
    for(let greenParagraph of greenParagraphs) {
        greenParagraph.className = 'hotpinkBg';
        console.log(greenParagraph.style.backgroundColor);
        console.log(getComputedStyle(greenParagraph).backgroundColor);
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

// Step 14
const tnrParagraph = document.querySelector("#tnrParagraph");

// Steps 15
console.log(tnrParagraph.style.fontFamily);
console.log(getComputedStyle(tnrParagraph).fontFamily);

// Step 16
function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    console.log(tnrParagraph.style.fontFamily);
    console.log(getComputedStyle(tnrParagraph).fontFamily);
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}