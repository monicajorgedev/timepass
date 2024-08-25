const express = require('express');
const horaMiddleware = require('../middlewares/horaMiddleware');
const router = express.Router();

router.get('/', horaMiddleware, (req, res) => {
  res.send(
    `<h1>Bienvenido </h1>
    <p>La hora actual es: ${req.dateType} </p> 
    <a href="endroute"><button>Entrar</button></a>
    <p>${req.query.mensaje ? req.query.mensaje: ''}</p>
    `
  );
});
module.exports = router;