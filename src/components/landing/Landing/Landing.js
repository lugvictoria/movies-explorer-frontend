import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Header from '../../main/Header/Header';
import Technology from '../Technology/Technology';
import AboutMe from '../AboutMe/AboutMe';

function Landing() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Technology />
        <AboutMe />
      </main>
    </div>
  );
}

export default Landing;
