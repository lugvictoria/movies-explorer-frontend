import MovieCardToggle from "../MovieCardToggle/MovieCardToggle";
import "./MovieCard.css";

function MovieCard({ name, duration, thumbnail, type }) {
  function convertToHoursAndMinutes(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return hours + "ч" + minutes + "м";
  }

  return (
    <li className="movie-card">
      <img
        src={thumbnail}
        alt={`Кадр из фильма ${name}`}
        className="movie-card__photo"
      />

      <div className="movie-card__block">
        <h3 className="movie-card__name">{name}</h3>
        <MovieCardToggle/>
      </div>

      <p className="movie-card__time">{`${convertToHoursAndMinutes(duration)}`}</p>
    </li>
  );
}

export default MovieCard;
