var express = require('express');
var router = express.Router();

const RegisterController = require('../controllers/RegisterController');

/* GET users listing. */
router.get('/', RegisterController.create);

module.exports = router;
