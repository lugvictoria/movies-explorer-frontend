import { useState } from "react";
import "./CardButton.css";

function CardButton() {
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

export default CardButton;
