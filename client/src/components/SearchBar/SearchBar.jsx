import React, { useState } from "react";
import { connect } from "react-redux";
import { getCountry, setCountries } from "../../redux/actions/actions";

export function SearchBar({ getCountry, setCountries, countries }) {
  const [name, setname] = useState("");

  const dinamicSearch = (name) => {
    const filtered = countries.filter((country) => {
      if (country.name.toUpperCase().includes(name.toUpperCase())) return true;
      return false;
    });
    setCountries(filtered);
  };
  const onSearch = (name) => {
    getCountry(name);
  };
  const handleChange = (event) => {
    setname(event.target.value);
    dinamicSearch(event.target.value);
  };
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      onSearch(name);
      setname("");
    }
  };
  return (
    <div>
      <div>
        <input
          type="search"
          onChange={handleChange}
          value={name}
          onKeyDown={handleEnter}
        ></input>
        <button
          onClick={() => {
            onSearch(name);
          }}
        >
          Buscar
        </button>
      </div>

      <div>
        <select>
          <option>Please choose one option</option>
          <option>Continente</option>
          <option>Actividad Turistica</option>
        </select>
        <select>
          <option>Please choose one option</option>
          <option>Nombre</option>
          <option>Poblacion</option>
        </select>
        <select>
          <option>Please choose one option</option>
          <option>Ascendente</option>
          <option>Descendente</option>
        </select>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    getCountry: (name) => {
      dispatch(getCountry(name));
    },
    setCountries: (countries) => {
      dispatch(setCountries(countries));
    },
  };
}
export function mapStateToProps({ countries }) {
  return {
    countries,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
