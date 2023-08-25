class MoviesFilter {
  static doStuff(movies, search) {
    if (!movies.length) return movies;

    const byName = this.byName(movies, search.query);
    const byDuration = this.byDuration(byName, search.isShort);

    return byDuration;
  }

  static byName(movies, query) {
    if (!query.trim()) return movies;

    const toSimilar = (name) => name.toLowerCase();

    return movies.filter(({ nameRU, nameEN }) => {
      const lowerName = toSimilar(query);
      return toSimilar(nameRU).includes(lowerName) || toSimilar(nameEN).includes(lowerName);
    });
  }

  static byDuration(movies, isShort) {
    return movies.filter(({ duration }) => {
      return isShort ? duration < 40 : movies;
    });
  }
}

export default MoviesFilter;
