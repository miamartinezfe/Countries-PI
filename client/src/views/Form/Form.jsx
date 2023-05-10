import React, { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import "./form.module.css";
import { connect } from "react-redux";
import validation from "./validation.js";
import { getCountries } from "../../redux/actions/actions";
import axios from "axios";
export function Form({ countries, getCountries }) {
  useEffect(() => {
    console.log("cargando paises");
    getCountries();
  }, []);
  const [activity, setActivity] = useState({
    name: "",
    dificult: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation(
        { ...activity, [event.target.name]: event.target.value },
        countries
      )
    );
  };
  const handleChangeList = (event) => {
    setErrors(
      validation(
        {
          ...activity,
          [event.target.name]: [
            ...activity[event.target.name],
            event.target.value,
          ],
        },
        countries
      )
    );
    if (event.key === "Enter") {
      event.preventDefault();
      activity.countries.find((country) => country === event.target.value)
        ? null
        : setActivity({
            ...activity,
            [event.target.name]: [
              event.target.value,
              ...activity[event.target.name],
            ],
          });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/activities", activity);
    alert("Actividad creada satisfactoriamente");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Link to={"/home"}>
          <button>HOME</button>
        </Link>
      </div>
      <label>Nombre </label>
      <input
        name="name"
        type="text"
        value={activity.name}
        onChange={handleChange}
      ></input>
      <span>{errors.name}</span>
      <div />
      <label>Dificultad </label>
      <input
        name="dificult"
        type="number"
        value={activity.dificult}
        onChange={handleChange}
      ></input>
      <span>{errors.dificult}</span>
      <div />
      <label>Duracion </label>
      <input
        name="duration"
        type="number"
        value={activity.duration}
        onChange={handleChange}
      ></input>
      <span>{errors.duration}</span>
      <div />
      <label>Temporada </label>
      <input
        name="season"
        list="seasons"
        id="seasons-choice"
        value={activity.season}
        onChange={handleChange}
      ></input>
      <span>{errors.season}</span>
      <datalist id="seasons">
        <option value={"Autumn"} />
        <option value={"Spring"} />
        <option value={"Summer"} />
        <option value={"Winter"} />
      </datalist>

      <div />
      <label>Paises </label>
      <input
        name="countries"
        list="Countries"
        id="Countries-choice"
        onChange={handleChangeList}
        onKeyDown={handleChangeList}
      ></input>
      <span>{errors.countries}</span>
      <div>{activity.countries.join(" - ")} </div>
      <datalist id="Countries">
        {countries.map((country) => {
          return <option value={country.name} key={country.id} />;
        })}
      </datalist>

      <div />
      {activity.name !== "" && Object.keys(errors).length === 0 ? (
        <button type="submit">Submit</button>
      ) : null}
    </form>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => {
      dispatch(getCountries());
    },
  };
}
export function mapStateToProps({ countries }) {
  return {
    countries,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);
