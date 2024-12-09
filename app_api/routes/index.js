const express = require('express');
const router = express.Router();
const LodgeController = require('../controllers/LodgeController');

// lodges
router.get('/lodges', LodgeController.index)

module.exports = router;
