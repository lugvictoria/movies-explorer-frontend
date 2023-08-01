import './Student.css';
import Article from '../Article/Article';
import AboutMe from '../AboutMe/AboutMe';

function Student() {
  return (
    <Article title="Студент" className="section" navId="student">
      <AboutMe />
    </Article>
  );
}

export default Student;
