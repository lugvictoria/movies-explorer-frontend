import './Portfolio.css';
function Portfolio() {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/russian-travel/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            проект один
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/mesto/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            проект второй
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/how-to-learn/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            проект третий
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://lugvictoria.github.io/react-mesto-auth/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            проект четвертый
          </a>
        </li>
      </ul>
    </article>
  );
}
export default Portfolio;
