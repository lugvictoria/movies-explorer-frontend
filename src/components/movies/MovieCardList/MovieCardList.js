import MoviesCard from "../MovieCard/MovieCard";
import MainApi from "../../../utils/MainApi";
import "./MovieCardList.css";

function MoviesCardList({
  type = "all",
  movies = [],
  removeMovie = undefined,
  pushOwner = undefined,
}) {
  async function removeSavedMovie(movieId) {
    const ownerId = movies?.find((it) => it.movieId === movieId)?._id;

    if (!ownerId) {
      console.error("Не удалось найти ownerId!");
      alert("Не удалось удалить фильм из сохраненных!");
      return;
    }

    try {
      await MainApi.removeSavedMovie(ownerId);
      if (typeof removeMovie !== "function") return;
      removeMovie(movieId);
    } catch (e) {
      console.error(e);
      alert("Не удалось удалить фильм из сохраненных!");
    }
  }

  async function addSavedMovie(movie) {
    try {
      const data = await MainApi.addSavedMovie(movie);
      if (typeof pushOwner !== "function") return;

      pushOwner(data?.movieId, {
        _id: data?._id,
        owner: data?.owner,
      });
    } catch (e) {
      console.error(e);
      alert("Не удалось добавить фильм в сохраненные!");
    }
  }

  function toggleReducer(action, movie) {
    switch (action) {
      case "add":
        addSavedMovie(movie).then();
        break;
      case "remove":
        removeSavedMovie(movie.movieId).then();
        break;
    }
  }

  return (
    <ul className="movie-card-list" aria-label="Список фильмов">
      {movies.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            type={type}
            toggleReducer={toggleReducer}
            key={movie.movieId}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
