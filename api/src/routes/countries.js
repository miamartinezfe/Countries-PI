const { Router } = require("express");
const getCountries = require("../controllers/countries/getCountries");
const getCountry = require("../controllers/countries/getCountry");
const getCountryByQuery = require("../controllers/countries/getCountryByQuery");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/", async (req, res) => {
  try {
    if (Object.keys(req.query).length) {
      var countries = await getCountryByQuery(req.query);
      if (!countries.length)
        return res
          .status(401)
          .send("No hay paises que coincidad con el criterio de busqueda");
    } else {
      var countries = await getCountries();
    }
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(401).send(error.message);
  }
});

router.get("/:idPais", async (req, res) => {
  const { idPais } = req.params;
  const country = await getCountry(idPais);
  if (country) return res.status(200).json(country);
  return res.status(401).send('El pais no existe en la base de datos');
});

module.exports = router;
