import MovieCardToggle from "../MovieCardToggle/MovieCardToggle";
import MovieCardRemove from "../MovieCardRemove/MovieCardRemove";
import "./MovieCard.css";

function MovieCard({ movie, type, toggleReducer }) {
  function convertToHoursAndMinutes(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return hours + "ч" + minutes + "м";
  }

  function isMovieHasOwner() {
    return "owner" in movie && typeof movie.owner === "object" && Object.keys(movie.owner).length > 0;
  }

  return (
    <li className="movie-card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={movie.thumbnail}
          alt={`Кадр из фильма ${movie.nameRU}`}
          className="movie-card__photo"
        />
      </a>
      <div className="movie-card__block">

        <h3 className="movie-card__name">
          <a
            href={movie.trailerLink}
            target="_blank"
            rel="noreferrer"
          >{movie.nameRU}</a>
        </h3>

        {type === "saved"
          ? (
            <MovieCardRemove
              onRemove={() => toggleReducer("remove", movie)}
            />
          )
          : (
            <MovieCardToggle
              isActive={isMovieHasOwner()}
              onToggle={(value) => {
                toggleReducer(value ? "add" : "remove", movie);
              }}
            />
          )
        }
      </div>

      <p className="movie-card__time">{`${convertToHoursAndMinutes(movie.duration)}`}</p>
    </li>
  );
}

export default MovieCard;
