import CardButton from "../MovieToggle/MovieToggle";
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

  function convertToHoursAndMinutes(duration) {
    var hours = Math.floor(duration / 60);
    var minutes = duration % 60;
    return hours + " ч " + minutes + " м";
  }

  return (
    <li className="movie-card" ref={ref}>
      <img
        src={thumbnail}
        alt={`Кадр из фильма ${name}`}
        className="movie-card__photo"
      />
      <div className="movie-card__block">
        <h3 className="movie-card__name">{name}</h3>
        <CardButton />
      </div>
      <p className="movie-card__time">{`${convertToHoursAndMinutes(
        duration
      )}`}</p>
    </li>
  );
}
export default MoviesCard;
