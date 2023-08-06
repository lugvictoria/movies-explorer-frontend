import "./Technology.css";

function Technology() {
  return (
    <section className="techs__section">
      <p className="techs__name-section">Технологии</p>
      <article className="techs">
        <p className="techs__title">7&nbsp;технологий</p>
        <p className="techs__subtitle">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>
      </article>
    </section>
  );
}

export default Technology;
