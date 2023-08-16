import { useEffect, useMemo, useState } from "react";
import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import MoviesCardList from "../MovieCardList/MovieCardList";
import SearchForm, { getInitialSearch } from "../Search/Search";
import testData from "../../../utils/testData";
import "./SavedMovies.css";
import MoviesFilter from "../../../utils/MoviesFilter";

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(() => getInitialSearch());

  useEffect(() => {
    setMovies(testData);
  }, []);

  const filteredMovies = useMemo(() => {
    return MoviesFilter.doStuff(movies, search);
  }, [movies, search]);

  return (
    <div className="movies-page">
      <Header/>

      <main>
        <SearchForm onChange={(state) => setSearch(state)}/>
        <MoviesCardList type="saved" movies={filteredMovies}/>
      </main>

      <Footer/>
    </div>
  );
}

export default SavedMovies;
