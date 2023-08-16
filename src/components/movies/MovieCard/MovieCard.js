import MovieCardToggle from "../MovieCardToggle/MovieCardToggle";
import "./MovieCard.css";
import { API_SERVICE } from "../../../defines";
import MovieCardRemove from "../MovieCardRemove/MovieCardRemove";

function MovieCard({ movie, type = undefined }) {
  function convertToHoursAndMinutes(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return hours + "ч" + minutes + "м";
  }

  return (
    <li className="movie-card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={API_SERVICE + "/" + movie.image.formats.thumbnail.url}
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
          ? <MovieCardRemove/>
          : <MovieCardToggle/>
        }
      </div>

      <p className="movie-card__time">{`${convertToHoursAndMinutes(movie.duration)}`}</p>
    </li>
  );
}

export default MovieCard;
