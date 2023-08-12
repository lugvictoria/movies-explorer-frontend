import logo from "../../../images/logo.svg";
import account from "../../../images/profile.svg";
import menu from "../../../images/menu.svg";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../../user/Menu/Menu";
import "./Header.css";

const loggedIn = true;

function Header() {
  const [isRightActive, setRightActive] = useState(false);
  const location = useLocation();

  function toggleRightMenu(value) {
    setRightActive(value);

    const html = document.querySelector("html");

    if (value) {
      html.classList.add("header__right-menu-open");
    } else {
      html.classList.remove("header__right-menu-open");
    }
  }

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="логотип" />
          </Link>
          <div className="header__button-container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header" id="header">
            <Link to="/" className="header__logo">
          <img src={logo} alt="логотип" className="header__logo" />
          </Link>
          <div className="header__button-container_films">
            <Link to="/movies" className="header__button">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__button">
              Сохранённые фильмы
            </Link>
          </div>
          <div className="header__button-entrance">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>

          <div className="header__button-container">
            <Link to="/profile">
              <img
              src={account}
              alt="аккаунт" />
            </Link>
          </div>

          {location.pathname !== "/" && (
            <button className="header__mobile-toggle">
              <img
                className="header__icon-menu"
                src={menu}
                alt="меню"
                onClick={() => toggleRightMenu(true)}
              />
            </button>
          )}
        </header>
      )}

      {location.pathname !== "/" && (
        <Menu
          isActive={isRightActive}
          tooggleActive={(value) => toggleRightMenu(value)}
        />
      )}
    </>
  );
}

export default Header;
