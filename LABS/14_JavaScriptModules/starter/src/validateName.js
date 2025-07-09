export const nameInput = document.querySelector('[name="name"]') 
export const validateNameLength = (event) => // Function to validate the length of the name input
    {
        if (event.target.value.length < 2) // Check if the name input has less than 2 characters
        {
            alert("Name not long enough") // Show an alert message
            nameInput.focus() // Set focus back to the name input
        }
    }