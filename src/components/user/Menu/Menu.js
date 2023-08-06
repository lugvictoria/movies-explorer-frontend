import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <main className="menu">
      <div className="menu_box">
        <Link to="/" className="menu__main">
          Главная
        </Link>
        <Link to="/movies" className="menu__movies">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="menu__saved">
          Сохраненные фильмы
        </Link>
      </div>
      <Link className="menu__link" to={-1}>
        Аккаунт
      </Link>
    </main>
  );
}

export default Menu;
