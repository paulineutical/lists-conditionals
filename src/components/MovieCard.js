function MovieCard({movie}) {
    return ( 
          // folliwing needs to get wrapped in a container, also possible: <> ... </> instead of div
          <div className="MovieCard">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.IMDBRating}</p>
            {/* <button onClick={() => deleteMovie(movie._id)} className="btn-delete">Delete</button> */}
            {/* Conditional rendering */}
            { movie.IMDBRating > 8 && <p>Recommended movie 👌</p> }

            { movie.hasOscars ? <p>This movie has an oscar winner 😃</p> : <p>This movie has no oscars 🥲</p>}

          </div>
     );
}

export default MovieCard;