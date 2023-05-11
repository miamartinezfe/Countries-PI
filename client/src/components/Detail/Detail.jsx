import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import detail from "./detail.module.css";
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
  if (Array.isArray(country.activities)) {
    country.activities = country.activities.map((activity) => {
      return activity.name;
    });
  }
  if (!country) return <h1>No existe el pais con ID : {id}</h1>;
  return (
    <div className={detail.container}>
      <div className={detail.containerBoton}>
        <Link to={`/home`}>
          <button className={detail.boton}>HOME</button>
        </Link>
      </div>
      <div className={detail.containerData}>
        <div className={detail.infoContainer}>
          <div className={detail.info}>
            <h2>{country.name}</h2>

            <p>ID: {country.id}</p>
            {country.capital?.length > 0 && (
              <p>Capital(s): {country.capital.join("-")}</p>
            )}
            {country.subregion && <p>Subregion: {country.subregion}</p>}
            {country.area && <p>Area (m2): {country.area}</p>}
            <p>Continent: {country.continent}</p>
            <p>Population: {country.population}</p>
            {country.activities?.length > 0 && (
              <p>Activities: {country.activities.join("-")}</p>
            )}
          </div>
        </div>
        <div className={detail.imgContainer}>
          {country.flagImg?.length > 0 && (
            <img src={country.flagImg[1]} alt="" className={detail.img}></img>
          )}
        </div>
      </div>
    </div>
  );
}
