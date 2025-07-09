export const formSubmit = (event) => // Function to handle form submission
    {
       event.preventDefault() // Prevent the default form submission behavior
       alert("The form has been submitted!") // Show an alert message
         for (let i = 0; i < 4; i++) // Loop through each input in the form
         {
              console.log(event.target[i].value) // Log the value of each input to the console
         }

    }