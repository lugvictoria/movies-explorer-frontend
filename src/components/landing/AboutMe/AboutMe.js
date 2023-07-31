import './AboutMe.css';
import photo from '../../../images/photo_student.svg';

function AboutMe() {
  return (
    <article className="about-me">
      <img src={photo} alt="Фотография автора" className="about-me__photo" />
      <div className="about-me__description">
        <h3 className="about-me__name">Vicsenty</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик</p>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
          С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        {/* <p className="about-me__text">
        Хочу продолжать изучать современные технологии и языки программирования,
        и достичь профессионального уровня в новой сфере деятельности.
        </p> */}
        <ul className="about-me__link-list">
          <li className="about-me__link-list-item">
            <a href="https://github.com/lugvictoria" className="about-me__link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default AboutMe;
