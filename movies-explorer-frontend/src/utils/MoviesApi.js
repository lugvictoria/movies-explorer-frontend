import { API_SERVICE } from "../defines";

class MoviesApi {
  static apiUrl = API_SERVICE + "beatfilm-movies";

  /** @returns {Promise<Movie.Item[]>}*/
  static async getAll() {

    const resp = await fetch(this.apiUrl, { method: "GET" });
    const json = await resp.text();
    const data = this.#validateJson(json);

    if (data === false) {
      console.error(json);
      throw new Error("Во время запроса произошла ошибка!");
    }

    if (!resp.ok) {
      console.error(data);
      throw new Error("Во время запроса произошла ошибка!");
    }

    return data;
  }

  static #validateJson(json) {
    try {
      return JSON.parse(json);
    } catch (e) {
      return false;
    }
  }
}

export default MoviesApi;