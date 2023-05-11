import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import form from "./form.module.css";
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
    console.log(activity);
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
    <form onSubmit={handleSubmit} className={form.form}>
      <div className={form.formulario}>
        <div>
          <input
            className={form.input}
            name="name"
            type="text"
            value={activity.name}
            onChange={handleChange}
          ></input>

          <div />

          <input
            className={form.input}
            name="dificult"
            type="number"
            value={activity.dificult}
            onChange={handleChange}
          ></input>

          <div />

          <input
            className={form.input}
            name="duration"
            type="number"
            value={activity.duration}
            onChange={handleChange}
          ></input>

          <div />

          <input
            className={form.input}
            name="season"
            list="seasons"
            id="seasons-choice"
            value={activity.season}
            onChange={handleChange}
          ></input>

          <datalist id="seasons">
            <option value={"Autumn"} />
            <option value={"Spring"} />
            <option value={"Summer"} />
            <option value={"Winter"} />
          </datalist>

          <div />

          <input
            className={form.input}
            name="countries"
            list="Countries"
            id="Countries-choice"
            onChange={handleChangeList}
            onKeyDown={handleChangeList}
            placeholder="Press Enter to Add Country"
          ></input>

          <p className={form.p}>{activity.countries.join(" - ")} </p>
          <datalist id="Countries">
            {countries.map((country) => {
              return <option value={country.name} key={country.id} />;
            })}
          </datalist>
          <button
            className={form.boton}
            type="submit"
            disabled={
              activity.countries.length === 0 || Object.keys(errors).length > 0
            }
          >
            Submit
          </button>
        </div>
      </div>
      <div className={form.span}>
        <p className={form.label}>
          Name
          <span className={form.error}> {errors.name}</span>
        </p>

        <p className={form.label}>
          Dificult (1-5)
          <span className={form.error}> {errors.dificult}</span>
        </p>

        <p className={form.label}>
          Duration (Hours)
          <span className={form.error}> {errors.duration}</span>
        </p>

        <p className={form.label}>
          Season
          <span className={form.error}> {errors.season}</span>
        </p>

        <p className={form.label}>
          Countries
          <span className={form.error}> {errors.countries}</span>
        </p>
      </div>
      <div />
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
