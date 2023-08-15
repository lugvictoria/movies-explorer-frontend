import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import AuthLinks from "../../main/AuthNav/AuthNav";
import Header from "../../main/Header/Header";
import Footer from "../../main/Footer/Footer";
import Techs from "../Techs/Techs";
import Student from "../Student/Student";

function Landing() {
  return (
    <div className="landing-page">
      <Header isThemed={true}>
        <AuthLinks />
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <Student />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
