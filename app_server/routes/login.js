var express = require('express');
var passport = require('passport');
var router = express.Router();

const LoginController = require('../controllers/LoginController');

/* GET users listing. */
router.get('/login', LoginController.index);

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), LoginController.store);

router.get('/logout', LoginController.destroy);

module.exports = router;
