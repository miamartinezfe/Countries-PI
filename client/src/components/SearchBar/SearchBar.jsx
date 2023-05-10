import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getCountry,
  setCountries,
  filterContinent,
  getActivities,
  filterActivity,
  filterByName,
} from "../../redux/actions/actions";
import "./searchbar.module.css";

export function SearchBar({
  getCountry,
  setCountries,
  countries,
  filterContinent,
  activities,
  getActivities,
  filterActivity,
  filterByName
}) {
  const [name, setname] = useState("");
  useEffect(() => {
    console.log("cargando actividades");
    getActivities();
  }, []);
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

  const handleContinent = (event) => {
    const continent = event.target.value;
    filterContinent(continent);
  };

  const handleActivities = (event) => {
    const activity = event.target.value;
    filterActivity(activity);
  };

  const handleSort = (event) => {
    const type = event.target.value;
    switch (type) {
      case "nameAsc":
        filterByName({key:'name',flow:'asc'});
        break;
      case "nameDesc":
        filterByName({key:'name',flow:'desc'});
        break;
      case "poblationAsc":
        filterByName({key:'population',flow:'asc'});
        break;
      case "poblationDesc":
        filterByName({key:'population',flow:'desc'});
        break;
      default:
        break;
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
        <select onChange={handleContinent}>
          <option value={"All"}>All</option>
          <option value={"Africa"}>Africa</option>
          <option value={"Antarctica"}>Antarctica</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Europe"}>Europe</option>
          <option value={"North America"}>North America</option>
          <option value={"Oceania"}>Oceania</option>
          <option value={"South America"}>South America</option>
        </select>
        <span>Filter by Continent</span>
        <select onChange={handleActivities}>
          <option>All</option>
          {activities &&
            activities.map((activity) => {
              return <option key={activity.id}>{activity.name}</option>;
            })}
        </select>
        <span>Filter by Activity</span>
        <select onChange={handleSort}>
          <option>Please choose one option</option>
          <option value={"nameAsc"}>Name ASC</option>
          <option value={"nameDesc"}>Name DESC</option>
          <option value={"poblationAsc"}>Poblation ASC</option>
          <option value={"poblationDesc"}>Poblation DESC</option>
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
    filterContinent: (continent) => {
      dispatch(filterContinent(continent));
    },
    getActivities: () => {
      dispatch(getActivities());
    },
    filterActivity: (activity) => {
      dispatch(filterActivity(activity));
    },
    filterByName: (payload) => {
      dispatch(filterByName(payload));
    },
  };
}
export function mapStateToProps({ countries, activities }) {
  return {
    countries,
    activities,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
