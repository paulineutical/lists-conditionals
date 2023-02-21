import moviesDataJSON from "../movies-data.json"
import { useState } from "react"

function MovieList() {
    const [movies, setMovies] = useState(moviesDataJSON)

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
            // folliwing needs to get wrapped in a container, also possible: <> ... </> instead of div
          <div className="MovieCard">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.IMDBRating}</p>
          </div>
        )
      }) }
    </div>
  )
}

export default MovieList
