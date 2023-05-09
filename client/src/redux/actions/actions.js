import { GET_COUNTRY, GET_COUNTRIES, SET_COUNTRIES } from "./types";
import axios from "axios";

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
        alert('Country not found');
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

export { getCountry, getCountries, setCountries };
