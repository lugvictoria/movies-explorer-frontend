import { Link, NavLink } from "react-router-dom";
import close from "../../../images/Group.svg";
import small from "../../../images/icon__COLOR_icon-main_small.svg";
import "./Menu.css";

const Menu = ({ isActive, toggleActive }) => {
  const closeMenu = () => {
    toggleActive(!isActive);
  };

  return (
    <div>
      <main>
        <div className={`menu ${isActive ? "menu__active" : ""}`.trim()}>
          <div className="menu_box">
            <div className="menu-content">
              <div className="menu-column">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `menu__item ${isActive ? "active" : ""}`;
                  }}
                  onClick={closeMenu}
                >
                  Главная
                </NavLink>

                <NavLink
                  to="/movies"
                  className={({ isActive }) => {
                    return `menu__item ${isActive ? "active" : ""}`;
                  }}
                  onClick={closeMenu}
                >
                  Фильмы
                </NavLink>

                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) => {
                    return `menu__item ${isActive ? "active" : ""}`;
                  }}
                  onClick={closeMenu}
                >
                  Сохраненные фильмы
                </NavLink>
              </div>

              <Link className="menu__link" to="/profile">
                <span className="menu__link__text">Аккаунт</span>
                <div className="menu__link__img">
                  <img src={small} alt="Войти в аккаунт" />
                </div>
              </Link>
            </div>

            <div
              onClick={() => toggleActive(!isActive)}
              className={"menu__button"}
            >
              <img
                className="menu__button__icon"
                alt="Закрыть"
                src={close}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
