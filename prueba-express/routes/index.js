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
  UserInstance.multiplyNumber(req, res)
});

router.get('/palindromo/:palabra', function(req, res, next) {
  UserInstance.checkPalindrome(req, res)
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hola');
});

module.exports = router;
