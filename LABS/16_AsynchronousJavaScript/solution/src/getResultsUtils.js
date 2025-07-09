import { resultsURL } from "./constants.js";

export const populateResults = results => {
    let resultsDisplay = document.createElement('section');
    let resultsPlaceholder = document.querySelector('div#resultsPlaceholder');
    let resultsArticle = document.querySelector('article#results');
    
    results.forEach(result => {
        let resultDisplay = document.createElement('p');
        resultDisplay.textContent = `${result.home} ${result.homeScore} - ${result.awayScore} ${result.away}`;
        resultsDisplay.appendChild(resultDisplay);
    });

    resultsArticle.replaceChild(resultsDisplay, resultsPlaceholder);
}

// export const getResults = () => {
//     // Put your code here
//     return fetch(resultsURL)
//         .then(results =>
//         {
//             if (results.ok)
//             {
//                 return results = results.json()
//             }
//             else
//             {
//                 throw new Error("Data not fetched")
//             }
//         })
//         .then(results =>
//         {
//             let reactRangersResults = results
//             populateResults(reactRangersResults)
//         })
//         .catch(error => console.log(error.message))
// }

export async function getResults()
{
    let results = await fetch(resultsURL)
    let reactRangersResults = await results.json()
    return reactRangersResults
}