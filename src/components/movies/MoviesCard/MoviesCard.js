import CardButton from "../CardButton/CardButton";
import { useState, useRef } from "react";
import "./MoviesCard.css";

function MoviesCard({ name, duration, thumbnail, type }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleClickSave() {
    setIsSaved((state) => !state);
  }

  const ref = useRef();

  function handleClickDelete() {
    setIsSaved(false);
    ref.current.remove();
  }

  return (
    <li className="movie-card" ref={ref}>
      <img
        src={thumbnail}
        alt={`Кадр из фильма ${name}`}
        className="movie-card__thumbnail"
      />
      <div className="movie-card__block">
        <h3 className="movie-card__name">{name}</h3>
        <CardButton />
      </div>
      <p className="movie-card__duration">{duration}</p>
    </li>
  );
}
export default MoviesCard;
