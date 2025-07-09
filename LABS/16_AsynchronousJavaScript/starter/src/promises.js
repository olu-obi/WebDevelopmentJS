export default function runPromise() 
{
  let aPromise = new Promise
  (
    (resolve, reject) => 
    {
       let delayedFunc = setTimeout(() =>
       {
            let randomNumber = Math.random();
            (randomNumber < 0.5) ? resolve(randomNumber) : reject(randomNumber)

       },Math.random() * 3000); //
    }, 
  )
  aPromise
        .then(data => {console.log (`promise rejected - ${data}`)})
         .catch (error => {console.log (`promise rejected - ${error}`)})  
}