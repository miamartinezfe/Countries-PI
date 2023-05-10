import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SET_COUNTRIES,
  FILTER_CONTINENT,
  GET_ACTIVITIES,
  FILTER_ACTIVITY,
  FILTER_BY_NAME,
} from "../actions/types";

const initialState = {
  countries: [],
  activities: [],
  filteredCountries: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case FILTER_BY_NAME:     
      return {
        ...state,
        filteredCountries: state.filteredCountries.sort((a, b) => {
          console.log(payload);
          console.log(a[payload.key]);
          let flow;
          if (payload.flow === "desc") flow = -1;
          else if (payload.flow === "asc") flow = 1;
          if (a[payload.key] > b[payload.key]) return flow;
          if (a[payload.key] < b[payload.key]) return -1 * flow;
          return 0;
        }),
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case FILTER_ACTIVITY:
      state.filteredCountries = state.countries;
      if (payload === "All") {
        state.filteredCountries = state.countries;
        return { ...state };
      }
      return {
        ...state,
        filteredCountries: state.filteredCountries.filter((country) => {
          return country?.activities.find(
            (activity) => activity.name === payload
          );
        }),
      };
    case FILTER_CONTINENT:
      state.filteredCountries = state.countries;
      if (payload === "All") return { ...state };
      return {
        ...state,
        filteredCountries: state.filteredCountries.filter((country) => {
          return country?.continent === payload;
        }),
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        filteredCountries: payload,
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
