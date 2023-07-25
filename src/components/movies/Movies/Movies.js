import Footer from '../../common/Header/Header';
import Header from '../../common/Footer/Footer';
import Navigation from '../../common/Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

import './Movies.css';

function Movies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
