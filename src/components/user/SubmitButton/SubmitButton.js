import classNames from "classnames";
import "./SubmitButton.css";

function SubmitButton({ title, className, disabled = false }) {
  return (
    <button
      className={classNames("submit-button", className)}
      type="submit"
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default SubmitButton;
