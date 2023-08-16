import { API_BACKEND, LS_AUTH_KEY, SERVER_ERROR } from "../defines";
import { validateJson } from "./index";


class MainApi {
  static async register({ name, email, password }) {
    const url = API_BACKEND + "/signup";
    const resp = await fetch(url, MainApi.#initPost({ name, email, password }));

    return await MainApi.#handleError(resp);
  }

  static async login({ email, password }) {
    const url = API_BACKEND + "/signin";
    const resp = await fetch(url, MainApi.#initPost({ email, password }));

    return await MainApi.#handleError(resp);
  }

  static async validate() {
    const url = API_BACKEND + "/users/me";

    try {
      const resp = await fetch(url, {
        method: "GET",
        headers: MainApi.#getAuthorization(),
      });

      const json = await resp.text();
      const data = JSON.parse(json);

      if (!resp.ok) {
        if (resp.status !== 401) {
          console.error(data);
        }

        return null;
      }

      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async #handleError(resp) {
    const { result, value } = validateJson(await resp.text());
    if (!result) throw new Error(value || SERVER_ERROR);

    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        if ("validation" in value) {
          const msg = `${value?.message} ${value?.validation?.body?.message}`;
          throw new Error(msg.trim() || SERVER_ERROR);
        }

        throw new Error(value?.message || SERVER_ERROR);
      }

      console.error(value?.message);
      throw new Error(SERVER_ERROR);
    }

    return value;
  }

  static #initPost(body) {
    return {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    };
  }

  static #getAuthorization() {
    const token = window.localStorage.getItem(LS_AUTH_KEY);
    return { Authorization: `Bearer ${token || ""}` };
  }
}

export default MainApi;
