const { Router } = require("express");
const postActivity = require("../controllers/activities/postActivity");
const getActivities = require("../controllers/activities/getActivities");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.post("/", async (req, res) => {
  try {
    const activity = await postActivity(req.body);
    return res.status(200).json(activity);
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    var countries = await getActivities();
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(401).send(error.message);
  }
});

module.exports = router;
