import './AboutMe.css';
import photo from '../../../images/photo_student.jpg';

function AboutMe() {
  return (
    <article className="about-me">
      <img src={photo} alt="Фотография автора" className="about-me__photo" />
      <div className="about-me__description">
        <h3 className="about-me__name">Vicsenty</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик</p>
        <p className="about-me__text">
        Мечтаю стать фронтенд-девелопером, создавать красивые, понятные и полезные вебсайты для пользователей.
        Начать с нуля новую деятельность было очень тяжело, но невероятно интересно.
        </p>
        <p className="about-me__text">
        Хочу продолжать изучать современные технологии и языки программирования,
        и достичь профессионального уровня в новой сфере деятельности.
        </p>
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
