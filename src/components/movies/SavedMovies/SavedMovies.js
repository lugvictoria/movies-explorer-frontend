import { useEffect, useMemo, useState } from "react";
import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import MoviesCardList from "../MovieCardList/MovieCardList";
import SearchForm, { getInitialSearch } from "../Search/Search";
import MoviesFilter from "../../../utils/MoviesFilter";
import MainApi from "../../../utils/MainApi";
import useFetch from "../../../hooks/useFetch";
import NotFound from "../../NotFound";
import PageAwait from "../../PageAwait";
import "./SavedMovies.css";

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(() => getInitialSearch());

  const [fetching, isLoading, error] = useFetch(async () => {
    const data = await MainApi.getSavedMovies();
    setMovies(data);
  }, true);

  useEffect(() => {
    fetching().then();
  }, []);

  const filteredMovies = useMemo(() => {
    return MoviesFilter.doStuff(movies, search);
  }, [movies, search]);

  function removeSavedMovie(id) {
    setMovies((prev) => prev.filter(it => it.movieId !== id));
  }

  return (
    <div className="movies-page">
      <Header/>

      <main>
        <SearchForm onChange={(state) => setSearch(state)} filterBySubmit/>

        <PageAwait isLoading={isLoading} error={error}>
          {filteredMovies.length
            ? (
              <MoviesCardList
                type="saved"
                movies={filteredMovies}
                removeMovie={removeSavedMovie}
              />
            )
            : (
              <NotFound
                text={!movies.length ? "У вас нет сохраненных фильмов" : undefined}
              />
            )
          }
        </PageAwait>

      </main>

      <Footer/>
    </div>
  );
}

export default SavedMovies;
