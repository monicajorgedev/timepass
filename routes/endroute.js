const express = require('express');
const validarHora = require('../middlewares/validarHora');
const router = express.Router();

router.get('/', validarHora, (req, res) => {
    res.send(`<h1>Ruta Final</h1>
      <h3>¡Bienvenido a la ruta final!</h3>`);
  });

module.exports = router;
