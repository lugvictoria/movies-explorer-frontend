import logo from "../../../images/logo.svg";
import menu from "../../../images/menu.svg";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "../../user/Menu/Menu";
import { useAuthContext } from "../../auth/AuthProvider";
import classNames from "classnames";
import "./Header.css";

function Header({ isThemed = false }) {
  const [isRightActive, setRightActive] = useState(false);
  const { user } = useAuthContext();

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
      {!user ? (
        <header
          id="header"
          className={classNames("header", isThemed ? "header_themed" : "")}
        >
          <Link to="/" className="header__logo">
            <img src={logo} alt="логотип" />
          </Link>

          <div className="header__button-entrance">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header
          id="header"
          className={classNames("header", isThemed ? "header_themed" : "")}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__logo ${isActive ? "active" : ""}`.trim()
            }
          >
            <img src={logo} alt="логотип" className="header__logo" />
          </NavLink>

          <div className="header__button-container_films">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `header__button ${isActive ? "active" : ""}`.trim()
              }
            >
              Фильмы
            </NavLink>

            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `header__button ${isActive ? "active" : ""}`.trim()
              }
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-container">
            <Link
              to="/profile"
              className="header__account-button"
              aria-label="Перейти на страницу профиля"
            >
              Аккаунт
            </Link>
          </div>

          <button className="header__mobile-toggle">
            <img
              className="header__icon-menu"
              src={menu}
              alt="меню"
              onClick={() => toggleRightMenu(true)}
            />
          </button>
        </header>
      )}

      {user && (
        <Menu
          isActive={isRightActive}
          toggleActive={(value) => toggleRightMenu(value)}
        />
      )}
    </>
  );
}

export default Header;
