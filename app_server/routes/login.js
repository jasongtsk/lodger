var express = require('express');
var router = express.Router();

const LoginController = require('../controllers/LoginController');

/* GET users listing. */
router.get('/', LoginController.create);

module.exports = router;
