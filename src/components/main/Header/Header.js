import "./Header.css";
import logo from "../../../images/logo.svg";
import account from "../../../images/profile.svg";
import menu from "../../../images/menu.svg";
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';

import { Link } from "react-router-dom";
import classNames from "classnames";

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
            <Link to="/profile" >
              <img src={account} alt="аккаунт" />
            </Link>
          </div>
          <button onClick={handleOpen} className="header__menu-button">
              <img src={menu} alt="меню" />
            </button>
          {isClicked ? <Navigation handleClose={handleClose} /> : ''}
        </header>
      )}
    </>
  );
}


export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header__logo-container">
//         <Link to="/" className="header__logo">Logo</Link>
//       </div>
//       {/* <nav className={{header__nav ${isMenuOpen ? "header__nav_opened" : ""}}}> */}
//         <ul className="header__nav-list">
//           <li className="header__nav-item">
//             <Link to="/movies" className="header__nav-link">Фильмы</Link>
//           </li>
//           <li className="header__nav-item">
//             <Link to="/saved-movies" className="header__nav-link">Сохраненное</Link>
//           </li>
//           <li className="header__nav-item">
//             <Link to="/profile" className="header__nav-link">Аккаунт</Link>
//           </li>
//         </ul>
//       {/* </nav> */}
//       <button
//         // className={header__menu-button ${isMenuOpen ? "header__menu-button_opened" : ""}}
//         onClick={handleMenuClick}
//       />
//     </header>
//   );
// };

// export default Header;
