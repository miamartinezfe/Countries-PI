import { GET_COUNTRIES, GET_COUNTRY, SET_COUNTRIES} from "../actions/types";

const initialState = {
  countries: [],
  activities: [],
  filteredCountries:[],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        filteredCountries:payload
      };

    case GET_COUNTRY:
      state.filteredCountries = state.countries;
      return {
        ...state,
        filteredCountries: payload,
      };

    case SET_COUNTRIES:
      state.filteredCountries = state.countries;
      return {
        ...state,
        filteredCountries: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
