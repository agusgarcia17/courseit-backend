var express = require('express');
var router = express.Router();
var UserController = require("./../controllers/userController")


const UserInstance = new UserController()

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  UserInstance.getUser(req, res)
});

router.get('/:id/details', function(req, res, next) {
  UserInstance.getUserInfo(req, res)
});

module.exports = router;
