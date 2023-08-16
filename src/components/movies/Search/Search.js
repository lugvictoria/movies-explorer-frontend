import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import { LS_SEARCH_KEY } from "../../../defines";
import "./Search.css";
import find from "../../../images/find.svg";
import Joi from "joi";
import { validateJsonByJoiSchema } from "../../../utils";

export const getInitialSearch = () => ({ query: "", isShort: false });

const searchSchema = Joi.object({
  query: Joi.string().allow("").required(),
  isShort: Joi.boolean().required(),
});

function clearHistory() {
  window.localStorage.removeItem(LS_SEARCH_KEY);
}


function getSearchHistory() {
  const json = window.localStorage.getItem(LS_SEARCH_KEY);
  const { value, error } = validateJsonByJoiSchema(json, searchSchema, getInitialSearch());

  if (error) clearHistory();

  return value;
}

function Search({ onChange, filterBySubmit = undefined, useHistory = undefined }) {
  const [search, setSearch] = useState(() => {
    return useHistory ? getSearchHistory() : getInitialSearch();
  });

  useEffect(() => {
    if (!filterBySubmit) onChange(search);

    if (useHistory) {
      window.localStorage.setItem(LS_SEARCH_KEY, JSON.stringify(search));
    }
  }, [search]);

  useEffect(() => {
    submitOnChange()
  }, []);

  function submitOnChange() {
    if (typeof onChange !== "function") return;
    if (!filterBySubmit) return;

    onChange(search);
  }

  function saveSearchQuery(e) {
    e.preventDefault();
    submitOnChange()
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
