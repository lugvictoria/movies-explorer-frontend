import logo from "../../../images/logo.svg";
import account from "../../../images/profile.svg";
import menu from "../../../images/menu.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../user/Menu/Menu";
import { useAuth } from "../../auth/AuthProvider";
import classNames from "classnames";
import "./Header.css";

function Header({ isThemed = false }) {
  const [isRightActive, setRightActive] = useState(false);
  
  const { user } = useAuth();

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
        <header id="header" className={classNames("header", isThemed ? "header_themed" : "")}>
          <Link to="/" className="header__logo">
            <img src={logo} alt="логотип"/>
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
        <header id="header" className={classNames("header", isThemed ? "header_themed" : "")}>
          <Link to="/" className="header__logo">
            <img src={logo} alt="логотип" className="header__logo"/>
          </Link>

          <div className="header__button-container_films">
            <Link to="/movies" className="header__button">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__button">
              Сохранённые фильмы
            </Link>
          </div>

          {/* <div className="header__button-entrance"> */}
          {/*   <Link to="/signup" className="header__button"> */}
          {/*     Регистрация */}
          {/*   </Link> */}
          {/*   <Link to="/signin" className="header__button header__button-green"> */}
          {/*     Войти */}
          {/*   </Link> */}
          {/* </div> */}

          <div className="header__button-container">
            <Link to="/profile">
              <img
                src={account}
                alt="аккаунт"/>
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
          tooggleActive={(value) => toggleRightMenu(value)}
        />
      )}
    </>
  );
}

export default Header;
