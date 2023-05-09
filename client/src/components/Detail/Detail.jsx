import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const [country, setCountry] = useState({});
  const { id } = useParams();
  useEffect(() => {
    //si le pasamos el id a useEffect funciona como componentWillUnmount()
    axios(`/countries/${id}`)
      .then(({ data }) => {
        setCountry(data);
      })
      .catch(() => {
        setCountry(null);
      });
    return setCountry({});
  }, [id]);
  if (!country) return <h1>No existe el pais con ID : {id}</h1>;
  return (
    <div>
      <Link to={`/home`}>
        <button>HOME</button>
      </Link>
      <div>
        <h2>{country.name}</h2>
        {country.flagImg?.length > 0 && (
          <img src={country.flagImg[0]} alt="" width="400" height="250"></img>
        )}
        <p>ID: {country.id}</p>
        {country.capital?.length > 0 && (
          <p>Capital(s): {country.capital.join("-")}</p>
        )}
        {country.subregion && <p>Subregion: {country.subregion}</p>}
        {country.area && <p>Area (m2): {country.area}</p>}
        <p>Continent: {country.continent}</p>
        <p>Population: {country.population}</p>
        {country.activities?.length > 0 && (
          <p>Activities: {country.activities}</p>
        )}
      </div>
    </div>
  );
}
