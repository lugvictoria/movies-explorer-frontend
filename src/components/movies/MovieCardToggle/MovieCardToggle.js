import classNames from "classnames";
import "./MovieCardToggle.css";

function MovieCardToggle({ isActive = false, onToggle }) {
  return (
    <button
      className={classNames(
        "movie-card__toggle",
        isActive ? "movie-card__toggle__active" : ""
      )}
      onClick={() => {
        if (!onToggle) return;
        onToggle(!isActive);
      }}
      title={
        isActive
          ? "Удалить фильм из сохраненных"
          : "Добавить фильм в сохраненные"
      }
    ></button>
  );
}

export default MovieCardToggle;
