// Step 18
const nameInput = document.querySelector('[name="name"]');

// Step 2b
const emailInput = document.querySelector('[name="email"]'); // 12b

// Step 14
const formSubmit = event => {
    event.preventDefault();
    alert("The form was submitted.");
    // step 17
	for(let i = 0; i < 3;i++) {
        console.log(event.target[i].value);
    }
    
}

// Step 15
document.querySelector('form').addEventListener('submit', formSubmit);

// Step 19
const validateNameLength = event => {
    if(event.target.value.length < 2) {
        alert("Name not long enough");
        nameInput.focus();
    }
}

// Step 20
nameInput.addEventListener('change', validateNameLength);


// 3b-5b
const validateEmailFormat = event => {
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))) {
        alert(`Email address not in a valid format`);
        emailInput.focus();
    }
}
// https://regexr.com/ really useful as you can see why it's not working in real time haha
//https://regex101.com/ is a good alternative too

// Step 6b
emailInput.addEventListener('change', validateEmailFormat);