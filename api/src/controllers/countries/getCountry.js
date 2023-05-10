const { Country, Activity } = require("../../db");

const getCountry = async function (idPais) {
  const countries = await Country.findByPk(idPais, {
    include: [{ model: Activity }],
  });
  return countries;
};

module.exports = getCountry;
