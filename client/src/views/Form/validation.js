export default function validation(
  { name, dificult, duration, season, countries },
  countriesList
) {
  const errors = {};
  name ? null : (errors.name = "El nombre no puede estar vacio");

  /^[1-5]$/.test(dificult)
    ? null
    : (errors.dificult = "Debe ser un numero del 1-5");

  duration ? null : (errors.duration = "La duracion no puede estar vacia");

  /^(Summer|Spring|Winter|Autumn)$/.test(season)
    ? null
    : (errors.season = "Solo puede ser 'Summer','Spring','Winter' o 'Autumn'");

  if (countries.length ===0) errors.countries = "Debe ingresar al menos 1 pais";
  else if (Array.isArray(countries)){
    const existe = countriesList.find(
      (country) => country.name === countries[countries.length - 1]
    );
    if (!existe) errors.countries = "No existe un pais con ese nombre";
  }

  return errors;
}
