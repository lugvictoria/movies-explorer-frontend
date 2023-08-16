import MoviesCard from "../MovieCard/MovieCard";
import "./MovieCardList.css";

function MoviesCardList({ type = "all", movies = [] }) {
  return (
    <ul className="movie-card-list" aria-label="Список фильмов">
      {movies.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            type={type}
            key={movie.id}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
