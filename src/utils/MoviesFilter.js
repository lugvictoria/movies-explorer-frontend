class MoviesFilter {
  /**
   * @param {Movie.Item[]} movies
   * @param {ISearch} search
   * @return {Movie.Item[]}
   */
  static doStuff(movies, search) {
    const byName = this.byName(movies, search.query);
    const byDuration = this.byDuration(byName, search.isShort);

    return byDuration;
  }

  /**
   * @param {Movie.Item[]} movies
   * @param {string} name
   * @return {Movie.Item[]}
   */
  static byName(movies, name) {
    if (!name.trim()) return movies;

    /**
     * @param {string} name
     * @return {string}
     */
    const toSimilar = (name) => name.toLowerCase()

    return movies.filter(({ nameRU, nameEN }) => {
      const lowerName = toSimilar(name)
      return toSimilar(nameRU).includes(lowerName) || toSimilar(nameEN).includes(lowerName);
    });
  }

  /**
   * @param {Movie.Item[]} movies
   * @param {boolean} isShort
   * @return {Movie.Item[]}
   */
  static byDuration(movies, isShort) {
    return movies.filter(({ duration }) => {
      return isShort ? duration < 40 : movies;
    });
  }
}

export default MoviesFilter;