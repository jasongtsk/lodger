const mongoose = require('mongoose');
const LodgeController = mongoose.model('lodge');

const index = async function (req, res) {
    let lodges = await LodgeController
        .find();
    res.status(200).json(lodges);
}

module.exports = {
    index
};
