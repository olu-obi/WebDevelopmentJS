

const prepareResultForSubmit = formData => {
    console.log(formData);
    console.log(formData.length);
    let result = {};
    for(let i = 0, j = formData.length -1; i < j; i++) {
        result[formData[i].name] = formData[i].value;
    }
    return result;
}

const submitResult = result => {
    let resultToSubmit = JSON.stringify(result); // Convert the result object to a JSON string
    return fetch(resultsURL,
        {
            method: 'POST',
            body: resultToSubmit,
            mode: crossOriginIsolated,
            headers:{"Content-Type": "application/json"}
        })
        .then(response => 
        {
            if(response.ok) 
                {alert("Data submitted successfully");} 
                else 
                {throw new Error("Something went wrong, please try again");}
        })
        .catch(error => 
        {
            console.log(error.message);
            alert(error.message);
        })
} 

const checkForReactUnited = formValues => {
    let searchText = `react united`;
    let homeTeam = formValues[0].value.toLowerCase();
    let awayTeam = formValues[2].value.toLowerCase();
    return (homeTeam.indexOf(searchText) === -1 && awayTeam.indexOf(searchText) === -1);
}

const handleSubmit = event => {
    if(checkForReactUnited(event.target)) {
        alert(`React United not included in result!`);
        event.preventDefault();
    }
    else {
        let result = prepareResultForSubmit(event.target);
        submitResult(result);
    };
}

export const registerEventListeners = () => {
    let form = document.querySelector('#result');
    form.addEventListener('submit', handleSubmit);
}
