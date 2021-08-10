import "../../App.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Searchbar = ({ getSearchValuee }) => {
  const [requestValue, setRequestValue] = useState("");

  const addSearchValue = (e) => {
    const { value } = e.currentTarget;
    setRequestValue(value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    getSearchValuee(requestValue);
    setRequestValue("");
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={submitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={requestValue}
          onChange={addSearchValue}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  getSearchValuee: PropTypes.func.isRequired,
};
