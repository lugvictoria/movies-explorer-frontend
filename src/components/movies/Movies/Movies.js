import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import Navigation from "../../main/Navigation/Navigation";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies-page">
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm />
        <MoviesCardList type="all" />
        <More />
        {/* <Preloader /> */}
      </main>
      <Footer />
    </div>
  );
}
export default Movies;
