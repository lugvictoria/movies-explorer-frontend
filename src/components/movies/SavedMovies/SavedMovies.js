import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import Navigation from "../../main/Navigation/Navigation";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <div className="movies-page">
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm />
        <MoviesCardList type="saved" />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
