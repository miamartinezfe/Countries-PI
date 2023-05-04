const { Router } = require('express');
const countryRouter = require('./countries');
const activityRouter = require('./activities');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/countries',countryRouter);
router.use('/activities',activityRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
