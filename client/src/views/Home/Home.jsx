import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import { connect } from "react-redux";
import { getCountries } from "../../redux/actions/actions";

export function Home({ getCountries, countries }) {
  useEffect( () => {
    console.log('Obteniendo paises');
    getCountries();
  }, [getCountries]);
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Cards paises={countries}></Cards>
      </div>
    </div>
  );
}
export function mapStateToProps({ countries }) {
  return {
    countries,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => {
      dispatch(getCountries());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);