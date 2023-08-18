import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import find from "../../../images/find.svg";
import "./Search.css";


export const getInitialSearch = () => ({ query: "", isShort: false });

function Search({ onChange, filterBySubmit = undefined, initial = undefined }) {
  const [search, setSearch] = useState(() => {
    return initial || getInitialSearch();
  });

  useEffect(() => {
    if (!filterBySubmit) onChange(search);
  }, [search]);

  useEffect(() => {
    submitOnChange();
  }, []);

  function submitOnChange() {
    if (typeof onChange !== "function") return;
    if (!filterBySubmit) return;

    onChange(search);
  }


  function saveSearchQuery(e) {
    e.preventDefault();
    submitOnChange();
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
