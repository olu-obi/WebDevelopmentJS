export default function runPromise()
{
    let aPromise = new Promise((resolve, reject) =>
    {
        let delayedFunc = setTimeout(() => 
        {
            let randomNumber = Math.random();
            (randomNumber < 0.5) ? resolve(randomNumber) : reject(randomNumber);
        }, Math.random() * 5000);
    })
    aPromise
        .then (data => {console.log(`Promise resolved with value ${data}`)})
        .catch(error => {console.log(`Promise rejected with value ${error}`)})
}