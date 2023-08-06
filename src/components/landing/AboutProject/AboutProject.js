import "./AboutProject.css";
import Article from "../Article/Article";

function AboutProject() {
  return (
    <section className="about-project__section" navId="about-project">
      <h2 className="about-project__name-section">
            О&nbsp;проекте
          </h2>
      <article className="about-project">
        <div className="about-project__context">
          <p className="about-project__title">
            Дипломный проект включал&nbsp;5 этапов
          </p>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="about-project__context">
          <p className="about-project__title">
            На&nbsp;выполнение диплома&nbsp;ушло&nbsp;5 недель
          </p>
          <p className="about-project__subtitle">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.{" "}
          </p>
        </div>
        <div className="about-project__blockline">
          <p className="about-project__time-block">1&nbsp;неделя</p>
          <p className="about-project__time-caption">Back-end</p>
          <p className="about-project__time-block">4&nbsp;недели</p>
          <p className="about-project__time-caption">Front-end</p>
        </div>
      </article>
    </section>
  );
}

export default AboutProject;
