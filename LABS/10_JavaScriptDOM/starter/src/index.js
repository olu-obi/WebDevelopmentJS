const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow']; // Array of colours

function buildP(placeholder) 
{
  let p = document.createElement('p'); // Create a new paragraph element
  let text = document.createTextNode('This is a paragraph'); // Create a text node
   p.appendChild(text); // Append the text node to the paragraph
   placeholder.appendChild(p); // Append the paragraph to the placeholder
}
buildP(document.querySelector('#placeholder')) // Call the function to build the paragraph


/*
function buildP(placeholder, num) 
{
    let i = 0; // Initialize a counter
    do
    {
   let p = document.createElement('p'); 
   let text = document.createTextNode(This is a paragraph'); 
   p.appendChild(text); 
   placeholder.appendChild(p); 
    i++ // Increment the counter
   }
   while(i<num)
}
buildP(document.querySelector('#placeholder'),5) // Call the function to build the paragraph
*/
