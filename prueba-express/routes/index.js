var express = require('express');
var router = express.Router();
const UserController = require ("./../controllers/userController")

const UserInstance = new UserController()


router.get('/test', function(req, res, next) {
  res.send('Test');
});

router.get('/test/:name', function(req, res, next) {
  UserInstance.getUser(req, res)
});

router.get('/numeros/:number', function(req, res, next) {
  res.send(`El numero multiplicado por dos es: ${req.params.number * 2} `);
});

router.get('/palindromo/:palabra', function(req, res, next) {

  const word = req.params.palabra

  const palindromo = word.split("").reverse().join("")

    if(palindromo === word) {
      res.send(`La frase ${word} es un palíndromo ya que al revés se lee: ${palindromo}.`);
    } else {
      res.send(`La frase ${word} NO es un palíndromo ya que al revés se lee: ${palindromo}`);
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hola');
});

module.exports = router;
