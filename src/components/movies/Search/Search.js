import { useEffect, useMemo, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Search.css";

export const getInitialSearch = () => ({ query: "", isShort: false });

function isSearchEquals(def, obj) {
  return def.query === obj.query && def.isShort === obj.isShort;
}

function Search({ onChange, filterBySubmit = undefined, initial = undefined }) {
  const [search, setSearch] = useState(initial || getInitialSearch());
  const [commit, setCommit] = useState(search);

  useEffect(() => {
    if (filterBySubmit) return;

    onChange(search);
    setCommit(search);
  }, [search]);

  useEffect(() => {
    submitOnChange();
  }, []);

  function submitOnChange() {
    if (typeof onChange !== "function") return;
    if (!filterBySubmit) return;

    onChange(search);
    setCommit(search);
  }

  function saveSearchQuery(e) {
    e.preventDefault();
    submitOnChange();
  }

  const isDisabled = useMemo(() => {
    return isSearchEquals(commit, search);
  }, [commit, search]);

  return (
    <form className="search" onSubmit={saveSearchQuery}>
      <input
        type="text"
        name="query"
        className="search__input"
        placeholder="Фильм"
        // required
        value={search.query}
        onChange={({ target }) => {
          setSearch((prev) => ({ ...prev, query: target.value }));
        }}
      />

      <Checkbox
        title="Короткометражки"
        className="search__checkbox"
        checked={search.isShort}
        onToggle={() =>
          setSearch((prev) => ({ ...prev, isShort: !prev.isShort }))
        }
      />

      <button type="submit" className="search__button" disabled={isDisabled}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <rect
            width="34"
            height="34"
            rx="17"
            fill={isDisabled ? "#ccc" : "#4285F4"}
          />
          <path
            d="M15 23L20 17L15 11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}

export default Search;
