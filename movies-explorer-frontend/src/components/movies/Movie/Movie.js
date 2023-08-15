import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import More from "../More/More";
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchBlock, { getInitialSearch } from "../Search/Search";
import { useEffect, useMemo, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import MoviesApi from "../../../utils/MoviesApi";
import "./Movie.css";
import PageAwait from "../../PageAwait";
import MoviesFilter from "../../../utils/MoviesFilter";

/** @type {ISizeConfig[]} */
const SIZE_CONFIG = [
  { name: "lg", width: 1280, row: 4, initial: 16, adding: 4 },
  { name: "md", width: 1137, row: 3, initial: 12, adding: 3 },
  { name: "sm", width: 595, row: 2, initial: 8, adding: 2 },
  { name: "xs", width: 0, row: 1, initial: 5, adding: 2 },
];

/**
 * @return {ISizeConfig}
 */
function getSizeConfig() {
  const width = window.innerWidth;
  const config = SIZE_CONFIG.sort((a, b) => b.width - a.width);

  for (const it of config) {
    if (width >= it.width) return it;
  }

  return config[config.length - 1];
}

function NotFound() {
  return (
    <div>
      <p style={{ textAlign: "center" }}>Ничего не найдено</p>
    </div>
  );
}

// TODO: Добавить сохранение в ls отфильтрованных фильмов
function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(() => getInitialSearch());
  const [page, setPage] = useState(1);
  const [sizeConfig, setSizeConfig] = useState(() => getSizeConfig());

  const [fetching, isLoading, error] = useFetch(async () => {
    const data = await MoviesApi.getAll();
    setMovies(data);
  });

  useEffect(() => {
    fetching().then();
  }, []);

  useEffect(() => {
    const onResizeHandler = () => {
      const config = getSizeConfig();

      if (config.name !== sizeConfig.name) {
        setSizeConfig(config);
      }
    };

    window.addEventListener("resize", onResizeHandler);

    return () => {
      window.removeEventListener("resize", onResizeHandler);
    };
  }, [sizeConfig]);

  const filteredMovies = useMemo(() => {
    return MoviesFilter.doStuff(movies, search);
  }, [movies, search]);

  const slicedMovies = useMemo(() => {
    return filteredMovies.length <= sizeConfig.initial
      ? filteredMovies
      : (() => {
        const start = filteredMovies.slice(0, sizeConfig.initial);
        const finish = filteredMovies.slice(sizeConfig.initial, sizeConfig.initial + (sizeConfig.adding * (page - 1)));

        return [...start, ...finish];
      })();
  }, [filteredMovies, page, sizeConfig]);

  return (
    <div className="movies-page">
      <Header/>
      <main>
        <SearchBlock onChange={(state) => setSearch(state)}/>

        <PageAwait isLoading={isLoading} error={error}>
          {slicedMovies.length
            ? (
              <>
                <MovieCardList type="all" movies={slicedMovies}/>

                {slicedMovies.length < filteredMovies.length && (
                  <More onClick={() => setPage(prev => prev + 1)}/>
                )}
              </>
            )
            : (<NotFound/>)}
        </PageAwait>
      </main>

      <Footer/>
    </div>
  );
}

export default Movies;
