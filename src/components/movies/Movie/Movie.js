import Footer from "../../main/Footer/Footer";
import Header from "../../main/Header/Header";
import More from "../More/More";
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchBlock, { getInitialSearch } from "../Search/Search";
import { useEffect, useMemo, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import MoviesApi from "../../../utils/MoviesApi";
import NotFound from "../../NotFound";
import PageAwait from "../../PageAwait";
import MoviesFilter from "../../../utils/MoviesFilter";
import { clearSavedMovieDto, getSavedMovieDto, getSizeConfig, validateJsonByJoiSchema } from "../../../utils";
import MainApi from "../../../utils/MainApi";
import { LS_FILTER_KEY, LS_SEARCH_KEY } from "../../../defines";
import useDidUpdateEffect from "../../../hooks/useDidUpdateEffect";
import Joi from "joi";
import "./Movie.css";

const moviesSchema = Joi.array().items({
  country: Joi.string().required(),
  director: Joi.string().required(),
  duration: Joi.number().required(),
  year: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  trailerLink: Joi.string().required(),
  thumbnail: Joi.string().required(),
  nameRU: Joi.string().required(),
  nameEN: Joi.string().required(),
  movieId: Joi.number().required(),
  _id: Joi.string(),
  owner: Joi.object({
    _id: Joi.string().required(),
    email: Joi.string().required(),
    name: Joi.string().required(),
  }),
});

const searchSchema = Joi.object({
  query: Joi.string().allow("").required(),
  isShort: Joi.boolean().required(),
});

function getLocalMovies() {
  const json = window.localStorage.getItem(LS_FILTER_KEY);
  if (!json) return [];

  const { value, error } = validateJsonByJoiSchema(json, moviesSchema, []);

  if (error) {
    window.localStorage.removeItem(LS_FILTER_KEY);
  }

  return value;
}

function getSearchHistory() {
  const json = window.localStorage.getItem(LS_SEARCH_KEY);
  const { value, error } = validateJsonByJoiSchema(json, searchSchema, getInitialSearch());

  if (error) {
    window.localStorage.removeItem(LS_SEARCH_KEY);
  }

  return value;
}

function Movies() {
  const [isHistory, setHistory] = useState(false);
  const [movies, setMovies] = useState(() => {
    const list = getLocalMovies();
    if (list.length) setHistory(true);
    return list;
  });
  const [search, setSearch] = useState(getSearchHistory);
  const [page, setPage] = useState(1);
  const [sizeConfig, setSizeConfig] = useState(getSizeConfig);

  const [fetching, isLoading, error] = useFetch(async () => {
    const data = await MoviesApi.getAll();
    const saved = await MainApi.getSavedMovies();

    const movies = data.map((it) => {
      const find = saved.find(({ movieId }) => movieId === it.id);

      return !find
        ? getSavedMovieDto(it, { _id: undefined, owner: undefined })
        : getSavedMovieDto(it, { _id: find?._id, owner: find?.owner });
    });

    setMovies(movies);
  });

  useEffect(() => {
    if (movies.length) return;
    fetching().then();
  }, [isHistory]);

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

  useDidUpdateEffect(async () => {
    if (isHistory) await fetching();

    const isSearchEmpty = search.query.trim() === "" && !search.isShort;

    if (!isSearchEmpty && !isHistory) {
      window.localStorage.setItem(LS_FILTER_KEY, JSON.stringify(filteredMovies));
    }

    if (!isSearchEmpty)
      window.localStorage.setItem(LS_SEARCH_KEY, JSON.stringify(search));
    else {
      window.localStorage.removeItem(LS_FILTER_KEY);
      window.localStorage.removeItem(LS_SEARCH_KEY);
    }

    setHistory(false);
  }, [search, filteredMovies]);


  const slicedMovies = useMemo(() => {
    return filteredMovies.length <= sizeConfig.initial
      ? filteredMovies
      : (() => {
        const start = filteredMovies.slice(0, sizeConfig.initial);
        const finish = filteredMovies.slice(sizeConfig.initial, sizeConfig.initial + (sizeConfig.adding * (page - 1)));

        return [...start, ...finish];
      })();
  }, [filteredMovies, page, sizeConfig]);


  function insertOwnerInMovie(id, owner) {
    setMovies((prev) => {
      return prev.map(it => it.movieId !== id ? it : { ...it, ...owner });
    });
  }


  function removeOwnerFromMovie(id) {
    setMovies((prev) => {
      return prev.map(it => it.movieId !== id ? it : clearSavedMovieDto(it));
    });
  }

  return (
    <div className="movies-page">
      <Header/>

      <main>
        <SearchBlock
          onChange={(state) => setSearch(state)}
          initial={search}
        />

        <PageAwait isLoading={isLoading} error={error}>
          {slicedMovies.length > 0
            ? (
              <>
                <MovieCardList
                  type="all"
                  movies={slicedMovies}
                  removeMovie={removeOwnerFromMovie}
                  pushOwner={insertOwnerInMovie}
                />

                {slicedMovies.length < filteredMovies.length && (
                  <More onClick={() => setPage(prev => prev + 1)}/>
                )}
              </>
            )
            : <NotFound/>}
        </PageAwait>
      </main>

      <Footer/>
    </div>
  );
}

export default Movies;
