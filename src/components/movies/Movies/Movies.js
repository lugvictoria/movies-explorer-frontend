import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchBlock from "../Search/Search";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies-page">
      <Header />
      <main>
        <SearchBlock />
        <MoviesCardList type="all" />
        <More />
        {/* <Preloader /> */}
      </main>

      <Footer />
    </div>
  );
}
export default Movies;
