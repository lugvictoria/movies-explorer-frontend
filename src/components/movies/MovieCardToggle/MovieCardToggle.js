import { useState } from "react";
import "./MovieCardToggle.css";

function MovieCardToggle() {
  const [isActive, setActive] = useState(false);

  return (
    <button
      className={`movie-card__toggle ${
        isActive ? "movie-card__toggle__active" : ""
      }`.trim()}
      onClick={() => setActive((prev) => !prev)}
    ></button>
  );
}

export default MovieCardToggle;
