import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Movies.css';
function Movies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Header isThemed>
        <Navigation isThemed />
      </Header>
      <main>
        Содержимое
      </main>
      <Footer />
    </>
  );
}
export default Movies;
