import './Portfolio.css';

function Portfolio() {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/how-to-learn/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничный сайт «Научиться учиться»
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/russian-travel/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Проект “Путешествия по России” Адаптивная верстка
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/mesto/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Проект “Место”  Одностраничный сайт-лендинг с иллюстрациями
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/react-mesto-auth/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Сервис Mesto: интерактивная страница c регистрацией и авторизацией, куда можно добавлять фотографии, удалять их и ставить лайки
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
