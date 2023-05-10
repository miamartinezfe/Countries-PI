import {
  GET_COUNTRY,
  GET_COUNTRIES,
  SET_COUNTRIES,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  GET_ACTIVITIES,
  FILTER_BY_NAME
} from "./types";
import axios from "axios";

const filterByName = (sort) => {
  return{
    type: FILTER_BY_NAME,
    payload : sort,
  }
}

const filterActivity = (activity) => {
  return {
    type: FILTER_ACTIVITY,
    payload: activity,
  };
};
const getActivities = () => {
  return (dispatch) => {
    axios.get(`/activities`).then(({ data }) => {
      return dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    });
  };
};

const filterContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

const getCountry = (name) => {
  return (dispatch) => {
    axios
      .get(`/countries?name=${name}`)
      .then(({ data }) => {
        return dispatch({
          type: GET_COUNTRY,
          payload: data,
        });
      })
      .catch(() => {
        alert("Country not found");
      });
  };
};

const getCountries = () => {
  return (dispatch) => {
    axios.get(`/countries`).then(({ data }) => {
      return dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    });
  };
};

const setCountries = (countries) => {
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};

export {
  getCountry,
  getCountries,
  setCountries,
  filterContinent,
  getActivities,
  filterActivity,
  filterByName,
};
