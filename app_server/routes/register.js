var express = require('express');
var router = express.Router();

const RegisterController = require('../controllers/RegisterController');

/* */
router.get('/register', RegisterController.create);

router.post('/register', RegisterController.store);

module.exports = router;
