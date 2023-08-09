// import classNames from "classnames";
import { useState } from "react";
import "./CardButton.css";

// function CardButton({ className, type, onClick }) {
//   const TYPE_CONFIG = {
//     save: {
//       text: "Сохранить",
//       className: "card-button_type_save",
//       alt: null,
//     },
//     done: {
//       text: "",
//       className: "card-button_type_done",
//       alt: "Снять отметку с фильма",
//     },
//     delete: {
//       text: "",
//       className: "card-button_type_delete",
//       alt: "Удалить фильм из сохранённых",
//     },
//   };

//   return (
//     <button
//       className={classNames(
//         className,
//         TYPE_CONFIG[type].className,
//         "card-button"
//       )}
//       type="button"
//       {...(TYPE_CONFIG[type].alt
//         ? { "aria-label": TYPE_CONFIG[type].alt }
//         : {})}
//       onClick={onClick}
//     >
//       {TYPE_CONFIG[type].text}
//     </button>
//   );
// }

function CardButton() {
  const [isActive, setActive] = useState(false);

  return (
    <button
      className={`movie-card__toggle ${
        isActive ? "movie-card__toggle__active" : ""
      }`.trim()}
      onClick={() => setActive(prev => !prev)}
    ></button>
  );
}

export default CardButton;
