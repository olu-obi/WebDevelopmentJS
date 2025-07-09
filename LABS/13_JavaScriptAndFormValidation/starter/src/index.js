const nameInput = document.querySelector('[name="fn"]')
const emailInput = document.querySelector('[name="email"]')

const formSubmit = (event) => 
    {
       event.preventDefault() // Prevent the default form submission behavior
       alert("The form has been submitted!") // Show an alert message
         for (let i = 0; i < 4; i++) // Loop through each input in the form
         {
              console.log(event.target[i].value) // Log the value of each input to the console
         }

    }
document.querySelector("form").addEventListener("submit", formSubmit)

const validateNameLength = (event) => 
    {
        if (event.target.value.length < 2) // Check if the name input has less than 2 characters
        {
            alert("Name not long enough") // Show an alert message
            nameInput.focus() // Set focus back to the name input
        }
    }
nameInput.addEventListener("change", validateNameLength) // Add an event listener for the change event on the name input

const validateEmailFormat = (event) => // Function to validate the email format
{
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))) // Validate the email format using a regular expression
    {
        alert("Email not in a valid format")
        emailInput.focus()
    }    
}

emailInput.addEventListener("change", validateEmailFormat) // Add an event listener for the change event on the email input
