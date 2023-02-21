import moviesDataJSON from "../movies-data.json"
import { useState } from "react"
import MovieCard from "./MovieCard"

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON)
  const [showMovies, setShowMovies] = useState(true)
  // challenge: how to set this up here? 
  // need a function toggleShowMovies
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


      { movies.map(movie => {
        return (
          <MovieCard movie={movie} key={movie._id} />
        )
      }) }
    </div>
  )
}

export default MovieList
