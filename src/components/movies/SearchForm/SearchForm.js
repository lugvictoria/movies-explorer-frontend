import Checkbox from "../Checkbox/Checkbox";
import find from "../../../images/find.svg";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Фильм"
        required
      />
      <Checkbox title="Короткометражки" className="search-form__checkbox" />
      <button type="submit" className="search-form__button">
        <img className="find__icon" alt="Иконка поиска" src={find} />
      </button>
    </form>
  );
}

export default SearchForm;
