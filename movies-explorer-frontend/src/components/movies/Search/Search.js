import Checkbox from "../Checkbox/Checkbox";
import find from "../../../images/find.svg";
import "./Search.css";
import { useEffect, useState } from "react";

/** @returns {ISearch} */
export const getInitialSearch = () => ({ query: "", isShort: false });

const LS_SEARCH_KEY = "_me_search_history";

function clearHistory() {
  window.localStorage.removeItem(LS_SEARCH_KEY);
}

function qtyKeys(obj) {
  return Object.keys(obj).length;
}

/**
 * @returns {ISearch}
 */
function getSearchHistory() {
  const initial = getInitialSearch();
  const json = window.localStorage.getItem(LS_SEARCH_KEY);

  if (!json) return initial;

  try {
    const state = JSON.parse(json);

    if (typeof state !== "object" || Array.isArray(state) || qtyKeys(initial) !== qtyKeys(state)) {
      clearHistory();
      return initial;
    }

    for (const key in initial) {
      const isValid = key in state && typeof initial[key] === typeof state[key];

      if (!isValid) {
        clearHistory();
        return initial;
      }
    }

    return state;
  } catch (e) {
    clearHistory();
    return initial;
  }
}

/**
 * @param  {{onChange: (state: ISearch) => void}} props
 * @returns {JSX.Element}
 * @constructor
 */
function Search({ onChange }) {
  const [search, setSearch] = useState(getSearchHistory);

  useEffect(() => {
    window.localStorage.setItem(LS_SEARCH_KEY, JSON.stringify(search));
    // Вариант с моментальной фильтрацией
    if (typeof onChange === "function") onChange(search);
  }, [search]);

  // Вариант с нажатием сабмита
  // useEffect(() => {
  //   if (typeof onChange === "function") onChange(search);
  // }, []);

  /** @param {FormEvent<HTMLFormElement>} e */
  function saveSearchQuery(e) {
    e.preventDefault();
    // Вариант с нажатием сабмита
    // if (typeof onChange === "function") onChange(search);
  }

  return (
    <form className="search" onSubmit={saveSearchQuery}>
      <input
        type="text"
        name="query"
        className="search__input"
        placeholder="Фильм"
        value={search.query}
        onChange={({ target }) => {
          setSearch((prev) => ({ ...prev, query: target.value }));
        }}
      />

      <Checkbox
        title="Короткометражки"
        className="search__checkbox"
        checked={search.isShort}
        onToggle={() => setSearch(prev => ({ ...prev, isShort: !prev.isShort }))}
      />

      <button type="submit" className="search__button">
        <img className="search__icon" alt="Иконка поиска" src={find}/>
      </button>
    </form>
  );
}

export default Search;
