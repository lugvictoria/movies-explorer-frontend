import { useState } from "react";
import "./CheckBoxToggle.css";

function CheckBoxToggle() {
  const [isActive, setActive] = useState(false);

  return (
    <button
      className={`checkbox__toggle ${
        isActive ? "checkbox__toggle__active" : ""
      }`.trim()}
      onClick={() => setActive((prev) => !prev)}
    >
      <span className="checkbox__toggle__label">{isActive ? "OFF" : "ON"}</span>
    </button>
  );
}

export default CheckBoxToggle;
