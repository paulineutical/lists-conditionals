import moviesDataJSON from "../movies-data.json"
import { useState } from "react"
import MovieCard from "./MovieCard"

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON)
  const [showMovies, setShowMovies] = useState(true)
// important: we use in the eventlistener onClick also an anonymous function, 
// because the setShowMovies is a callback function - otherwise it wouldnt wait 
// for everything else to get executed before calling the toggleShowMovies function

  // challenge: how to set this up here? 
  // need a function toggleShowMovies
  const toggleShowMovies = () => {
    setShowMovies(() => !showMovies)
  }
  // need a button
  // and conditional rendering

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId
    })

    setMovies(filteredMovies)
  }

  return (
    <div>
      <h2>MovieList</h2>

      {/* <button onClick={toggleShowMovies}> {showMovies ? "Hide" : "Show"} </button> */}
      <button onClick={() => toggleShowMovies(true)}>{showMovies ? "Hide" : "Show"}</button>

      { showMovies && movies.map(movie => {
        return (
          <MovieCard movie={movie} key={movie._id} />
        )
      }) }
    </div>
  )
}

export default MovieList
