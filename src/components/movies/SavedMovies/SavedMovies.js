import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import MoviesCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../Search/Search";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <div className="movies-page">
      <Header>
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
