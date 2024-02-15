import "./Student.css";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Student() {
  return (
    <section className="student__section" navId="student">
      <AboutMe />
      <Portfolio />
    </section>
  );
}

export default Student;
