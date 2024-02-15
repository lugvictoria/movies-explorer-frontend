import remove from "../../../images/remove.svg";
import "./MovieCardRemove.css";

function MovieCardRemove({ onRemove }) {
  return (
    <button
      className="movie-card__remove"
      onClick={() => {
        if (onRemove) onRemove();
      }}
    >
      <img
        src={remove}
        alt="remove-icon"
        className="movie-card__remove__icon"
      />
    </button>
  );
}

export default MovieCardRemove;
