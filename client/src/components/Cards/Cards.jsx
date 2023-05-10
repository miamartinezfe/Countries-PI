import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useState } from "react";
import { connect } from "react-redux";
import { getCountries } from "../../redux/actions/actions";
import './cards.css'

export function Cards({ filteredCountries, getCountries }) {
  useEffect(() => {
    setItems(filteredCountries);
  }, [filteredCountries]);
  const [items, setItems] = useState([]); // Lista de elementos
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 10; // Número de elementos por página
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = items ? items.slice(firstIndex, lastIndex) : null;

  return (
    <div className="cards">
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          disabled={lastIndex >= items?.length || !items}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      {Array.isArray(currentItems)
        ? currentItems.map(({ flagImg, name, continent, id }) => {
            return (
              <Card
                flagImg={flagImg}
                name={name}
                continent={continent}
                key={id}
                id={id}
              ></Card>
            );
          })
        : null}
    </div>
  );
}
export function mapStateToProps({ filteredCountries }) {
  return {
    filteredCountries,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => {
      dispatch(getCountries());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
