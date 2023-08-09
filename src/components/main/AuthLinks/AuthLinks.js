import { NavLink } from "react-router-dom";
import "./AuthLinks.css";

function AuthLinks() {
  return (
    <nav className="auth-links">
      <ul className="auth-links__list">
        <li className="auth-links__link">
          <NavLink to="/signup" className="auth-links__link">
            Регистрация
          </NavLink>
        </li>
        <li className="auth-links__link">
          <NavLink
            to="/signin"
            className="auth-links__link auth-links__link_type_login"
          >
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthLinks;
