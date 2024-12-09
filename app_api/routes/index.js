const express = require('express');
const router = express.Router();
const ctrlLodges = require('../controllers/lodges');

// lodges
router
    .route('/lodges')
    .get(ctrlLodges.lodgesList)

module.exports = router;
