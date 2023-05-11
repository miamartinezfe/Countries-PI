import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useState } from "react";
import { connect } from "react-redux";
import cards from "./cards.module.css";

export function Cards({ filteredCountries }) {
  useEffect(() => {
    setItems(filteredCountries);
  }, [filteredCountries]);

  const [items, setItems] = useState([]); // Lista de elementos
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 12; // Número de elementos por página
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = items ? items.slice(firstIndex, lastIndex) : null;
  return (
    <div className={cards.container}>
      <div >
        <button
          className={cards.button}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          className={cards.button}
          disabled={lastIndex >= items?.length || !items}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <div className={cards.cards}>
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
    </div>
  );
}
export function mapStateToProps({ filteredCountries }) {
  return {
    filteredCountries,
  };
}

export default connect(mapStateToProps, null)(Cards);
