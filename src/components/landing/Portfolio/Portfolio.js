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
            Первый проект;
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
            Проект “Место”  Одностраничный сайт-лендинг с иллюстрациями.
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/express-mesto-gha/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Четвертый проект
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
