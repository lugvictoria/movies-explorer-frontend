import { Link } from "react-router-dom";
import SubmitButton from "../SubmitButton/SubmitButton";
import logo from "../../../images/logo.svg";
import "./Authorization.css";

const MODES = {
  register: {
    title: "Добро пожаловать!",
    hint: (
      <p className="auth__hint">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="auth__link">
          Войти
        </Link>
      </p>
    ),
    buttonText: "Зарегистрироваться",
  },
  login: {
    title: "Рады видеть!",
    hint: (
      <p className="auth__hint">
        Ещё не зарегистрированы?{" "}
        <Link to="/signup" className="auth__link">
          Регистрация
        </Link>
      </p>
    ),
    buttonText: "Войти",
  },
};

function Authorization({ mode = "register", isLoading, isDisabled, error, onSubmit, children }) {
  if (!Object.keys(MODES).includes(mode)) {
    console.error("Тип параметра `mode` не валиден!");
    return null;
  }

  return (
    <main className="auth">
      <div className="auth__container">
        <Link className="auth__logo-link" to="/">
          <img
            className="header__logo"
            alt="Логотип приложения: круг"
            src={logo}
          />
        </Link>

        <h1 className="auth__title">{MODES[mode].title}</h1>

        <form className="auth__form" onSubmit={onSubmit}>
          {children}

          {error.status && (
            <p className="auth__error">{error.message}</p>
          )}

          <SubmitButton
            title={MODES[mode].buttonText}
            className="auth__submit-button"
            disabled={isLoading || isDisabled}
          />
        </form>

        {MODES[mode].hint}
      </div>
    </main>
  );
}

export default Authorization;
