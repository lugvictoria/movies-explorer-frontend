import "./Footer.css";

function Footer() {
  return (
    <footer className="footer content__footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <nav className="footer__caption">
        <ul className="footer__links-list">
          <li className="footer__link">
            <a href="https://practicum.yandex.ru/" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link">
            <a href="" className="footer__link">
              Github
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">&copy;&nbsp;2023</p>
    </footer>
  );
}

export default Footer;
