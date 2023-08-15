import MoviesCard from "../MovieCard/MovieCard";
import "./MovieCardList.css";
import { API_SERVICE } from "../../../defines";

function MoviesCardList({ type, movies }) {
  return (
    <ul className="movie-card-list" aria-label="Список фильмов">
      {movies.map((movie) => {
        return (
          <MoviesCard
            key={movie.id}
            name={movie.nameRU}
            duration={movie.duration}
            thumbnail={API_SERVICE + movie.image.formats.thumbnail.url}
            // type={type}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
