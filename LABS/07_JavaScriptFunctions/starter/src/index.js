const movies = [
  {
    title: "Jaws",
    director: "Steven Spielberg",
    year: "1975"
  },
  {
    title: "Star Wars",
    director: "George Lucas",
    year: "1977"
  },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018"
  },
  {
    title: "Top Gun",
    director: "Tony Scott",
    year: "1986"
  },
  {
    title: "Justice League",
    director: "Zack Snyder",
    year: "2017"
  }
];

// Part 1 - Create a function to find a movie 
/*
function findMovie(movieTitle)
{
  for (let movie of movies)
  {
    if (movie.title === movieTitle)
    {
      console.log(`${movie.title} is a filmed done by ${movie.director} releaaed in ${movie.year}`)
    }
  }
}
findMovie("Star Wars")
let movie = "Thor: Ragnorok"
console.log(movie)
*/

// Part 2 - Create a function to return a movie object
function returnMovie(movieTitle)
{
  for (let movie of movies)
    {
    if (movie.title === movieTitle)
      {
        return movie
      }
      console.log(movie)
    }
    //console.log("Any text,any text at all")
    return `${movieTitle} not found in the list of films`
  }
  let myMovie = returnMovie("Avengers; Infinity War")
  console.log(myMovie)
  console.log(`${myMovie.title} is a filmed done by ${myMovie.director} releaaed in ${myMovie.year}`)
  let myOtherMovie = returnMovie("Thor: Ragnorok")
  console.log(myOtherMovie)

  function myMovieDetails(anyMovie)
  {
    if (typeof anyMovie === "Object")
    {
      return `${anyMovie.title} is a filmed done by ${anyMovie.director} releaaed in ${anyMovie.year}`
    }
    else
    {
      return anyMovie
    }
  }
  console.log(myMovieDetails(returnMovie("Jaws")))

