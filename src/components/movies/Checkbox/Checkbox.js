import classNames from "classnames";
import "./Checkbox.css";

function Checkbox({ className, title, checked, onToggle }) {
  return (
    <label className={classNames(className, "checkbox")}>
      <input
        type="checkbox"
        name="short-film"
        className="checkbox__system-box"
        checked={checked}
        onChange={onToggle}
      />

      <span className="checkbox__custom-checkbox"></span>
      <span className="checkbox__label">{title}</span>
    </label>
  );
}

export default Checkbox;
