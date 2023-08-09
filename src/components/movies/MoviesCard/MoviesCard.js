import CardButton from "../CardButton/CardButton";
import getNumDeclination from "../../../utils/getNumDeclination";
import { useState, useRef } from "react";
import "./MoviesCard.css";

function MoviesCard({ name, duration, thumbnail, type }) {
  // DEMO FOR BUTTON CLICK
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

        {/* {type === "all" ? (
          isSaved ? (
            <CardButton
              className="movie-card__button"
              type="done"
              onClick={handleClickSave}
            />
          ) : (
            <CardButton
              className="movie-card__button"
              type="save"
              onClick={handleClickSave}
            />
          )
        ) : (
          <CardButton
            className="movie-card__button"
            type="delete"
            onClick={handleClickDelete}
          />
        )} */}

        <CardButton />
      </div>
      <p className="movie-card__duration">{`${duration} ${getNumDeclination(
        duration,
        ["минута", "минуты", "минут"]
      )}`}</p>
    </li>
  );
}
export default MoviesCard;
