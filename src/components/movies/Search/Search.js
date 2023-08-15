import Checkbox from "../Checkbox/Checkbox";
import find from "../../../images/find.svg";
import "./Search.css";

function Search() {
  return (
    <form className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Фильм"
        required
      />
      <Checkbox title="Короткометражки" className="search__checkbox" />
      <button type="submit" className="search__button">
        <img className="search__icon" alt="Иконка поиска" src={find} />
      </button>
    </form>
  );
}

export default Search;
