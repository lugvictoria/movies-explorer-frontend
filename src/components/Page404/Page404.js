import { Link } from "react-router-dom";
import "./Page404.css";

function Page404() {
  return (
    <main className={("page404", "section")}>
      <div className="page404_Textbox">
        <h1 className="page404__title">404</h1>
      </div>
      <p className="page404__subtitle">Страница не найдена</p>
      <Link className="page404__link" to={-1}>
        Назад
      </Link>
    </main>
  );
}

export default Page404;
