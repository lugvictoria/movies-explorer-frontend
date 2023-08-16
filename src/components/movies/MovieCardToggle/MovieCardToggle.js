import { useState } from "react";
import "./MovieCardToggle.css";

function MovieCardToggle({ onToggle }) {
  const [isActive, setActive] = useState(false);

  return (
    <button
      className={`movie-card__toggle ${
        isActive ? "movie-card__toggle__active" : ""
      }`.trim()}
      onClick={() => {
        setActive((prev) => !prev);
        if (onToggle) onToggle();
      }}
    ></button>
  );
}

export default MovieCardToggle;
