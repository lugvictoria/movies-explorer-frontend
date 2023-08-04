import Footer from '../../main/Footer/Footer';
import Header from '../../main/Header/Header';
import Navigation from '../../main/Navigation/Navigation';
import More from '../More/More';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
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
        <MoviesCardList type="all" />
        <More />
       {/* <Preloader /> will ve set later */}
      </main>
      <Footer />
    </>
  );
}
export default Movies;
