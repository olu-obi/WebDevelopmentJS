// Set up code - do not remove
//document.querySelector('button#textColour').addEventListener('click', changeFontColour);
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);
// Do not alter lines of code 2-4!

    const blueParagraph = document.querySelector("#blueParagraph"); // Select all paragraph elements
    console.log(blueParagraph.style.color); // Logout the selected elements to the console 
    console.log(getComputedStyle(blueParagraph).color); // Log the current color of the first paragraph

function blueToRed() 
{
   blueParagraph.style.color = 'red'; // Change the color of the first paragraph to red
   console.log(blueParagraph.style.color); // Log the new color of the first paragraph
   console.log(getComputedStyle(blueParagraph).color); // Log the current color of the first paragraph
   blueParagraph.textContent = blueParagraph.textContent.replace('blue', 'red'); // Replace the text content of the first paragraph with 'red'
}

const greenParagraphs = document.querySelectorAll(".greenBg"); // Select all paragraphs with the class 'greenBg'
console.log(greenParagraphs[0].style.backgroundColor); // Log the selected elements to the console
console.log(getComputedStyle(greenParagraphs[0]).backgroundColor); // Log the current background color of the first green paragraph


function greenToPink() 
{
 for (let greenParagraph of greenParagraphs) // Loop through each green paragraph
 {
   greenParagraph.className="hotpinkBg"; // Change the class of the green paragraph to 'hotpinkBg'
   console.log(greenParagraph.style.backgroundcolor) // Log the new color of the first paragraph
   console.log(getComputedStyle(greenParagraph).backgroundColor)// Log the current background color of the first green paragraph
   greenParagraph.textContent = greenParagraph.textContent.replace('green', 'pink') // Replace the text content of the first paragraph with 'pink'
 }
}

const tnrParagraph = document.querySelector("#tnrParagraph"); // Select all paragraphs with the class 'tnrFont'
console.log(tnrParagraph.style.fontFamily) // Log the selected elements to the console
console.log(getComputedStyle(tnrParagraph).fontFamily) // Log the current background color of the first green paragraph

function tnrToArial() 
{
    tnrParagraph.style.fontFamily = 'Arial' // Change the font family of the first paragraph to Arial
    console.log(tnrParagraph.style.fontFamily) // Log the new font family of the first
    console.log(getComputedStyle(tnrParagraph).fontFamily) // Log the current font family of the first paragraph
    tnrParagraph.textContent = tnrParagraph.textContent.replace('Times New Roman', 'Arial') // Replace the text content of the first paragraph with 'Arial'

}
