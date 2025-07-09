import { registerEventListeners } from "./formUtils.js";
import { getResults, populateResults } from "./getResultsUtils.js";


//import runPromise from "./promises.js";

//runPromise()

getResults()
    .then(results => populateResults(results))
    .catch(error => console.log(error.message))

registerEventListeners()