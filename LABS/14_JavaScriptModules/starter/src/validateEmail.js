export const emailInput = document.querySelector('[name="email"]')
export const validateEmailFormat = (event) => // Function to validate the email format
{
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))) // Validate the email format using a regular expression
    {
        alert("Email not in a valid format")
        emailInput.focus()
    }    
}