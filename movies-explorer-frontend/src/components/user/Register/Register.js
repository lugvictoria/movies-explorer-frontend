import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import "../Auth/Auth.css";
import { useState } from "react";

function Register() {
  const [isError, setError] = useState('')

  return (
    <main className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__logo-link">
          <img src={logo} alt="логотип"/>
        </Link>
        {/* <a className="auth__logo-link" to="/"> */}
        {/* <img className="header__logo" alt="Логотип приложения" src={logo} /> */}
        {/* </a> */}
        <h1 className="auth__title">Добро пожаловать!</h1>
        <form className="auth__form">
          <label className="auth__input-container">
            <span className="auth__label">Имя</span>
            <input
              className="auth__input"
              type="text"
              name="name"
              required
              minLength="2"
              maxLength="30"
              placeholder="Виталий"
            ></input>
          </label>
          <label className="auth__input-container">
            <span className="auth__label">E-mail</span>
            <input
              className="auth__input"
              type="email"
              name="email"
              placeholder="pochta@yandex.ru"
              required
            ></input>
          </label>
          <label className="auth__input-container">
            <span className="auth__label">Пароль</span>
            <input
              className="auth__password-input"
              type="password"
              name="password"
              placeholder=".............."
              required
            ></input>
          </label>

          {isError && (
            <p className="auth__error">Что-то пошло не так...</p>
          )}

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
