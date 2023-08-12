import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import "../Auth/Auth.css";

function Register() {
  return (
    <main className="auth">
      <div className="auth__container">
        <a className="auth__logo-link" to="/">
          <img className="header__logo" alt="Логотип приложения" src={logo} />
        </a>
        <h1 className="auth__title">Добро пожаловать!</h1>
        <form className="auth__form">
          <label className="auth__input-container">
            <span className="auth__label">Имя</span>
            <input
              className="auth__input"
              type="text"
              name="name"
              required
              minlength="2"
              maxlength="30"
              placeholder="Виталий"
            ></input>
          </label>
          <label className="auth__input-container">
            <span className="auth__label">E-mail</span>
            <input
              className="auth__input"
              type="email"
              name="email"
              required
              placeholder="pochta@yandex.ru"
            ></input>
          </label>
          <label className="auth__input-container">
            <span className="auth__label">Пароль</span>
            <input
              className="auth__input auth__password-input"
              type="password"
              name="password"
              required
              placeholder="................."
            ></input>
          </label>
          <p className="auth__error">Что-то пошло не так...</p>
          <button className="submit-button auth__submit-button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <p className="auth__hint">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="auth__link">
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
