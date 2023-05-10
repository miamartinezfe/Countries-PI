const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const postActivity = async function ({
  name,
  dificult,
  duration,
  season,
  countries,
}) {
  console.log(name, dificult, duration, season, countries);
  if ((countries && countries.length === 0) || !countries)
    throw new Error("Se debe especificar al menos un pais");
  countries = await Country.findAll({
    where: {
      name: countries,
    },
  });
  const activity = await Activity.create({
    name,
    dificult,
    duration,
    season,
  });
  activity.addCountries(countries);
  return activity;
};

module.exports = postActivity;
