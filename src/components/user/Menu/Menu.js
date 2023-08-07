import { Link } from "react-router-dom";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import account from "../../../images/profile.svg";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>Menu</button>
      {isOpen && (
        <main className="menu">
          <div className="menu_box">
            <div className="menu">
              <NavLink
                to="/"
                activeClassName="active"
                className="menu__main"
                onClick={toggleMenu}
              >
                Главная
              </NavLink>
              <NavLink
                to="/movies"
                activeClassName="active"
                className="menu__movies"
                onClick={toggleMenu}
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                activeClassName="active"
                className="menu__saved"
                onClick={toggleMenu}
              >
                Сохраненные фильмы
              </NavLink>
              <Link className="menu__link" to="/signin">
                <img className="" alt="Аккаунт" src={account} />
              </Link>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Menu;

// function Menu() {
//   return (
//     <main className="menu">
//       <div className="menu_box">
//         <Link to="/" className="menu__main">
//           Главная
//         </Link>
//         <Link to="/movies" className="menu__movies">
//           Фильмы
//         </Link>
//         <Link to="/saved-movies" className="menu__saved">
//           Сохраненные фильмы
//         </Link>
//       </div>
//       <Link className="menu__link" to={-1}>
//         Аккаунт
//       </Link>
//     </main>
//   );
// }
