import "./Portfolio.css";

function Portfolio() {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href=""
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href=""
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href=""
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
        </li>
        {/* <li className="portfolio__list-item">
          <a
            href="/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Сервис Mesto: интерактивная страница c регистрацией и авторизацией, куда можно добавлять фотографии, удалять их и ставить лайки
          </a>
        </li> */}
      </ul>
    </article>
  );
}

export default Portfolio;
