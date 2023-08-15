import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import MoviesCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../Search/Search";
import "./SavedMovies.css";
import testData from "../../../utils/testData";
import { useEffect, useState } from "react";

function SavedMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(testData);
  }, []);

  return (
    <div className="movies-page">
      <Header/>

      <main>
        <SearchForm/>
        <MoviesCardList type="saved" movies={movies}/>
      </main>

      <Footer/>
    </div>
  );
}

export default SavedMovies;
