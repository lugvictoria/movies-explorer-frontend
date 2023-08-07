import "./Header.css";
import logo from "../../../images/logo.svg";
import account from "../../../images/profile.svg";
import menu from "../../../images/menu.svg";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";

import { Link } from "react-router-dom";

const loggedIn = true;

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="form__logo">
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
          <img src={logo} alt="логотип" className="form__logo" />
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
              <img src={account} alt="аккаунт" />
            </Link>
          </div>
          <Link to="/menu" className="header__menu-button">
            <img src={menu} alt="меню" />
          </Link>
          {isClicked ? <Navigation handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
