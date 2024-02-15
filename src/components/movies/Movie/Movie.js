import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import More from "../More/More";
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchBlock from "../Search/Search";
import "./Movie.css";

function Movies() {
  return (
    <div className="movies-page">
      <Header />
      <main>
        <SearchBlock />
        <MovieCardList type="all" />
        <More />
        {/* <Preloader /> */}
      </main>

      <Footer />
    </div>
  );
}
export default Movies;
