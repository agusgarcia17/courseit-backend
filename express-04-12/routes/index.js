var express = require('express');
var router = express.Router();
var AxiosController = require("./../controllers/ejercicioController")


const AxiosInstance = new AxiosController()

router.get('/calcular', function(req, res, next) {
  AxiosInstance.calcularPrimos(req, res)
});

router.get('/pokemon', function(req, res, next) {
  AxiosInstance.primosPokemon(req, res)
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
