import { NavLink } from "react-router-dom";
import "./AuthNav.css";

function AuthNav() {
  return (
    <nav className="auth-links">
      <ul className="auth-links__list">
        <li className="auth-nav__link">
          <NavLink to="/signup" className="auth-nav__link">
            Регистрация
          </NavLink>
        </li>
        <li className="auth-nav__link">
          <NavLink
            to="/signin"
            className="auth-nav__link auth-nav__link_type_login"
          >
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNav;
