import "./AboutMe.css";
import photo from "../../../images/photo_student.jpg";

function AboutMe() {
  return (
    <section className="about-me__section">
      <p className="about-me__name-section">Студентка</p>
      <div className="about-me__table">
        <div className="about-me__description">
          <h3 className="about-me__name">Виктория</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик</p>
          <p className="about-me__text">
            Я родилась и живу в Ростове-на-Дону, закончила факультет прикладной математики ЮФУ.
            После окончания университета работала системным администратором. У меня есть
            взрослый сын, он тоже работает в IT сфере. В качестве хобби увлекаюсь искусством и дизайном,
            изготовлением дизайнерских вещей. С 2012 года работала в сфере обучения и образования.
            После того, как прошла курс по веб-разработке, занимаюсь созданием сайтов в сфере обучения.
          </p>
          <ul className="about-me__link-list">
            <li className="about-me__link-list-item">
              <a
                href="https://github.com/lugvictoria"
                className="about-me__link"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img src={photo} alt="Фотография автора" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
