const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountryByQuery = async function (query) {
  for (const property in query) {
    var propiedad = property;
    var key = query[property];
  }

  if (
    propiedad === "id" ||
    propiedad === "name" ||
    propiedad === "continent" ||
    propiedad === "subregion"
  ) {
    var countries = await Country.findAll(
      {
        where: {
          [propiedad]: {
            [Op.iLike]: key,
          },
        },
      }
    );
  } else {
    var countries = await Country.findAll({
      where: {
        ...query,
      },
    });
  }
  return countries;
};

module.exports = getCountryByQuery;
