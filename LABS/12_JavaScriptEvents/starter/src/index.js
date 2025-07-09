// Add code here for part 5-7
document.querySelector("button#textColour").addEventListener("click", blueToRed)
document.querySelector("button#bgColour").addEventListener("click", greenToPink)
document.querySelector("button#fonts").addEventListener("click", tnrToArial)

// Don't change the code between here and the next comment
const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
};

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
    for(let greenParagraph of greenParagraphs) {
        greenParagraph.className = 'hotpinkBg';
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}

// Add the event handlers for mouse over, mouse out and click on tnrParagraph here and register them
const mouseOver = event => // This function will be called when the mouse is over the tnrParagraph
{
    event.target.style.backgroundColor = "limegreen"; // Change the background color of the tnrParagraph to limegreen
    if (event.target.textContent.indexOf("background") === -1) // Check if the text content does not already contain "background"
    {
        event.target.textContent += ". I have had my background colour changed on mouse over" // Append the text content with a message
    }
    else 
    {
        event.target.textContent = event.target.textContent.replace("out", "over") // If the text content already contains "background", replace "out" with "over"
    }
}

tnrParagraph.addEventListener("mouseover", mouseOver); // Register the mouse over event handler

const mouseOut = event => // This function will be called when the mouse is over the tnrParagraph
{
    event.target.style.backgroundColor = "yellow" // Change the background color of the tnrParagraph to yellow
    if (event.target.textContent.indexOf("background") === -1) // Check if the text content does not already contain "background"
    {
        event.target.textContent += ". I have had my background colour changed on mouse out" // Append the text content with a message
    }
    else 
    {
        event.target.textContent = event.target.textContent.replace("over", "out") // If the text content already contains "background", replace "out" with "over"
    }
}

tnrParagraph.addEventListener("mouseout", mouseOut); // Register the mouse over event handler

const elementClick = (event) => // This function will be called when the tnrParagraph is clicked
{
    event.target.style.backgroundColor = "white"; // Change the background color of the tnrParagraph to orange
    event.target.textContent = "I have no event listeners attached to me now" // Check if the text content is "have no event listeners attached to me now"

     document.querySelector("button#fonts").removeEventListener("click", tnrToArial); // Remove the event listener for the text colour button
     document.target.removeEventListener("click", elementClick); // Remove the event listener for the tnrParagraph click event
     document.target.removeEventListener("mouseover", mouseOver); // Remove the event listener for the tnrParagraph mouse over event
     document.target.removeEventListener("mouseout", mouseOut); // Remove the event listener for the tnrParagraph mouse out event

    if (event.target.id === "tnrParagraph") // Check if the tnrParagraph is clicked
    
       {
        blueParagraph.textContent = "Event listerners Enabled"; // Change the text content of the blueParagraph to "Event listeners Enabled"
        blueParagraph.addEventListener("click", elementClick); // Remove the event listener for the tnrParagraph click event
        blueParagraph.addEventListener("ver", mouseOver);
        blueParagraph.addEventListener("out", mouseOut);
       }
    
else 
  {
        tnrParagraph.textContent = "Event listerners Enabled"; // Change the text content of the blueParagraph to "Event listeners Enabled"
        tnrParagraph.addEventListener("click", elementClick); // Remove the event listener for the tnrParagraph click event
        tnrParagraph.addEventListener("over", mouseOver); // Register the mouse over event handler for the tnrParagrapht.
        tnrParagraph.addEventListener("out", mouseOut); // Register the mouse over and mouse out event handlers for the tnrParagraph
    }
}
    
tnrParagraph.addEventListener("click", elementClick); // Register the click event handler for the tnrParagraph